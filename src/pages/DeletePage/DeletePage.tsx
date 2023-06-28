import {useState} from "react";
import {api} from "../../api/api";
import {PageConstructor} from "../../components/PageConstructor/PageConstructor";

export const DeletePage = () => {
    const [responses, setResponses] = useState([]);
    const onclickHandler = () => {
        api.delete('delete')
            .then(resp => setResponses((prev) => [...prev, resp]))
            .catch(error => console.log(error))
    }
    return (
        <PageConstructor responses={responses} requestType='DELETE' onClickHandler={onclickHandler}/>
    )
}