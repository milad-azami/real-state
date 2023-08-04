import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import SignupPage from "@/template/SignupPage";

async function Signup() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return <SignupPage />;
}

export default Signup;
