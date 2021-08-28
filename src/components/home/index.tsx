import { useEffect, useState, useRef } from 'react';
import { API } from '../../Services/api';
import IRequest from './interface';
import './index.css';

const Home = (): JSX.Element => {
    const [requestData, setRequestData] = useState<IRequest[] | null>(null);
    const [posts, setPosts] = useState<IRequest[] | null>(null);
    const valueFilter = useRef<HTMLInputElement>(null);

    const newRequest = async () => {
        const requests: Array<IRequest> = (await API.get('posts')).data;
        setRequestData(requests);
        setPosts(requestData);
        if (!!valueFilter.current?.value) {
            return newFilter();
        }
        return;
    };

    const newFilter = () => {
        let SearchString: string | undefined = valueFilter.current?.value;

        if (!SearchString) {
            return setPosts(requestData);
        }

        SearchString = SearchString.toLowerCase();

        const newData = requestData?.filter((post) => {
            const title = post.title.toLowerCase().includes(SearchString!);
            const body = post.body.toLowerCase().includes(SearchString!);

            return title || body;
        });

        setPosts(newData!);
        return;
    };

    useEffect(() => {
        newRequest();
        // eslint-disable-next-line
    }, []);

    return (
        <div id="Home">
            <div id="SearchBar">
                <input
                    className="SearchBar-child"
                    type="search"
                    ref={valueFilter}
                    onChange={() => newFilter()}
                />
                <button
                    className="SearchBar-child"
                    onClick={() => newRequest()}
                >
                    Search new news
                </button>
            </div>
            <div id="Posts">
                {posts?.map((post, index) => {
                    return (
                        <div key={index} className="post">
                            <h3>{post.title}</h3>
                            <section>
                                <p>{post.body}</p>
                            </section>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
