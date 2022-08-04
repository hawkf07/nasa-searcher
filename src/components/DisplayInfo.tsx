interface itemsApiDataTypes {
  center: string;
  dateCreated: string;
  description: string;
  keywords: Array<string>;
  mediaType: string;
  nasaId: string;
  secondaryCreator?: string;
  title: string;
}

export function DisplayInfo({ searchedApiData, apiData,inputForm }) {
  if (searchedApiData.length === 0) return
  const data = searchedApiData.collection?.items.flatMap(item => item.data)
  const flattedData = data.flatMap(item => item)
  console.log(data,"is data",flattedData,"is flattedData")
  return (
    <section name="display-info" className="w-full p-3">
      <div className="container" name="img-container">
      {searchedApiData.collection.links.map(item => {
          return(
          <>
          <img src={item.links} />
          </>
          )
        })}
      </div>
      { Array.isArray(flattedData) ?  flattedData?.flatMap((item) => {
        return (
          <section name="card-container" className="">
            <ul className="gap-5  p-5 justify-center items-center flex  ">
              <section
                name="card"
                className="flex flex-col   p-3 m-3 items-center rounded w-full gap-3"
              >
                <section name="card-title" className="text-2xl ">
                  <h2>title:{item.title} </h2>
                </section>
                <section
                  name="card-body"
                  className="flex flex-col justify-center items-start p-3"
                >
                  
                  <li> id: {item.nasa_id} </li>
                  <li> keywords: {item.keywords} </li>
                  <li> description: {item.description} </li>
                  <li> dateCreated: {item.date_created} </li>
                </section>
              </section>
            </ul>
          </section>
        );
      }) : <h1> data is undefined </h1>}
    </section>
  );
}
