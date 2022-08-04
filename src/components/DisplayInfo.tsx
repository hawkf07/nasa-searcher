import { FC } from 'react';
import type {FormPropsTypes} from './Form'

interface itemsApiDataTypes {
  center: string;
  date_created: string;
  description: string;
  keywords: Array<string>;
  media_type: string;
  nasa_id: string;
  secondary_creator?: string;
  title: string;
}
interface DisplayInfoData {
  searchedApiData:any;
  apiData:any;
  inputForm:string;
}

export const DisplayInfo:FC<DisplayInfoData> = ({ searchedApiData, apiData, inputForm }) => {
  if (searchedApiData[0]?.collection?.items?.length === 0) {
    console.log(searchedApiData);
    return <h1 className="mx-3"> There is no result for {inputForm} </h1>;
  } else
    return (
      <section className="flex flex-col p-5">
        {searchedApiData[0].collection?.items?.flatMap((item: any, itemKey:number) => {
          return (
            <section>
              {item.data.flatMap((dataItem: itemsApiDataTypes) => {
                return (
                  <ul
                    key={itemKey}
                    className="flex gap-3 p-3 flex-col justify-center items-center"
                  >
                    {item?.links?.map((imgLinks:any) => {
                      return (
                        <>
                          {imgLinks.rel === "preview" && (
                            <img
                              className="w-full rounded-lg"
                              src={imgLinks.href}
                            />
                          )}
                        </>
                      );
                    })}
                    <li className="text-2xl">
                      {" "}
                      <h2> {dataItem.title} </h2>{" "}
                    </li>
                    <li> {dataItem.date_created} </li>
                    <li>keywords: {dataItem.keywords} </li>
                    <li> id {dataItem.nasa_id} </li>
                    <li>media type {dataItem.media_type} </li>
                  </ul>
                );
              })}
            </section>
          );
        })}
      </section>
    );
}
