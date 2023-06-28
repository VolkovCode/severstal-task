import {useState} from "react";

interface PageConstructorProps {
    responses: [];
    requestType: string;
    onClickHandler: () => void;
}

export const PageConstructor = (props: PageConstructorProps) => {
    const {
        requestType,
        responses,
        onClickHandler
    } = props
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className='page'>
            <button className='request-button' type='button' onClick={onClickHandler}>
                Произвести {requestType} запрос
            </button>
            <div className={'response-area__container'}>
                {!responses.length ? <></> : <button onClick={() => setCollapsed((prev) => !prev)} type='button' className='collapse-button'>{collapsed ? 'Развернуть' : 'Свернуть'}</button>}
                <div className={`response-area ${collapsed ? 'response-area--collapsed' : ''}`}>
                    {responses.map((resp, index) => (<div key={index} className='response-area__item'><p>Время запроса: {resp.headers['request-duration']} мс</p><p>URL: {resp.data.url}</p></div>))}</div>
            </div>
        </div>
    )
}