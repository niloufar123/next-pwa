export default async function AccountFeatures({params}:{params:Promise<{slug:string}>;})
{
    const {slug} =  await params;
    return(
        <div className="flex min-h-screen flex-col p-6">
            <h2>The features in account</h2>
            <h3>
                {slug}
            </h3>

        
        </div>
    )
}