import {useState} from "react";
import {api} from "../../api/api";
import {PageConstructor} from "../../components/PageConstructor/PageConstructor";

export const GetPage = () => {
    const [responses, setResponses] = useState([]);
    const onclickHandler = () => {
        api.get('get')
            .then(resp => setResponses((prev) => [...prev, resp]))
            .catch(error => console.log(error))
    }
    return (
        <PageConstructor responses={responses} requestType='GET' onClickHandler={onclickHandler}/>
    )
}