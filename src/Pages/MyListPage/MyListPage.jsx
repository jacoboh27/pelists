import { Layout } from '../../Components/Layout/Layout.jsx';
import { useContext } from "react";
import { PeListsContext } from '../../Context/Context.jsx';
import { MyList } from '../../Components/MyList/MyList.jsx';
import { MyListItem } from '../../Components/MyListItem/MyListItem.jsx';

function MyListPage() {
    const currentPath = window.location.pathname;
    const index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    const { lists } = useContext(PeListsContext);
    const MyFoundList = lists?.[index];

    return (
        <Layout className='bg-red-100'>
            <div className="relative flex justify-center w-80 items-center mb-6">
                <h2 className='font-medium text-2xl mt-10'>Mi Lista {MyFoundList.title}</h2>
            </div>
            <MyList
                list={MyFoundList.list}
            >               
                {item => (
                    <MyListItem 
                        key={item.key}
                        title={item.title}
                        platform={item.platform}
                        completed={item.completed}
                        // onComplete={() => completeTodo(item.text)}
                        // onDelete={() => deleteTodo(item.text)}
                    />
                )}
            </MyList>
        </Layout>
    )
  }
  
export {MyListPage};

{/* {
    MyFoundList.list.map((item, key=item.index) => (
        <MyListItem 
            key={key}
            title={item.title}
            platform={item.platform}
            completed={item.completed}
        />                     
    ))
} */}