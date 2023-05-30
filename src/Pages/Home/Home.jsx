import { CreateList } from '../../Components/CreateList/CreateList.jsx';
import { Layout } from '../../Components/Layout/Layout.jsx';
import { MyLists } from '../../Components/MyLists/MyLists.jsx';
import { useContext } from "react";
import { PeListsContext } from '../../Context/Context.jsx';

function Home () {
    const { lists } = useContext(PeListsContext);
    console.log('Lists:', lists);
    return (
        <Layout >   
            <div className='flex flex-col w-full items-center bg-emerald-300 py-8'>
                <h1 className="text-7xl text-black">
                    PeLists
                </h1>            
            </div>
            <MyLists
                lists={lists}
            />
            <CreateList />
        </Layout>
    )
}

export { Home };