import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import AppLayout from "@/layouts/AppLayout";
import Head from "next/head";

export default function Ser(){
    return(
        <>
        <Head>
                <title>{'Services'}</title>
                <meta name="description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                <meta property="og:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta property="og:image" content={ogimgurl} />
                 <meta property="og:image:width" content="400" />
                    <meta property="og:image:height" content="400" /> */}
                <meta property="og:title" content={'Services'} />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={'Services'} />
                <meta name="twitter:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta name="twitter:image" content={ogimgurl} /> */}
            </Head>
        <AppLayout>
            <NavBar/>
            <div className="-mt-20">
                    <Services/>
            </div>
        </AppLayout>
        </>
    )

} 