import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

// Dashboard with user infroamtion
const page = async () => {
    const session = await getServerSession(authOptions);

    if(session?.user){
        return 
        <h2 className='text-2xl'>
            Admin page = welcome back
        </h2>
    }
    return(
        <h2>Please login to see this page</h2>
    )
};

export default page;