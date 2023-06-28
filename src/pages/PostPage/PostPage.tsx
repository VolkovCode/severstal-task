import {useState} from "react";
import {api} from "../../api/api";
import {PageConstructor} from "../../components/PageConstructor/PageConstructor";

export const PostPage = () => {
    const [responses, setResponses] = useState([]);
    const onclickHandler = () => {
        api.post('post')
            .then(resp => setResponses((prev) => [...prev, resp]))
            .catch(error => console.log(error))
    }
    return (
        <PageConstructor
            responses={responses}
            requestType='POST'
            onClickHandler={onclickHandler}
        />
    )

}