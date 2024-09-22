import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

// Dashboard with user infroamtion
const page = async () => {
    const session = await getServerSession(authOptions);

    return<div>welcome to admin</div>;
};

export default page;