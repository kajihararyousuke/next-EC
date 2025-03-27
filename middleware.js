import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null; // ✅ 正しくトークンを取得

  if (!token) {
    return NextResponse.json({ message: "トークンがありません" }, { status: 401 }); // ✅ ステータスコードを設定
  }

  try {
    const secretKey = new TextEncoder().encode("next-market-app-book");
    await jwtVerify(token, secretKey); // ✅ `decodedJwt` は不要（検証だけするなら）
    return NextResponse.next(); // ✅ 認証成功なら次へ進む
  } catch (err) {
    return NextResponse.json({ message: "トークンが正しくないのでログインしてください" }, { status: 403 });
  }
}

export const config = {
  matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
};
