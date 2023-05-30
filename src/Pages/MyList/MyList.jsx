import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Layout } from '../../Components/Layout/Layout.jsx';
import { useContext } from "react";
import { PeListsContext } from '../../Context/Context.jsx';

function MyList() {
    const currentPath = window.location.pathname;
    const index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    const { lists } = useContext(PeListsContext);
    const MyListItem = lists?.[index];

    return (
        <Layout className='bg-red-100'>
            <div className="relative flex justify-center w-80 items-center mb-6">
                <h1>Mi Lista {MyListItem.title}</h1>
            </div>
            <div className='flex flex-col w-80'>       
                {
                    MyListItem.list.map((product, key=product.index) => (
                        <div>
                            <p>{product.title}</p>
                            <p>{product.platform}</p>
                        </div>
                    ))
                }
                {/* {
                    context.order?.[index].products.map(product => (
                        <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        />
                    ))
                } */}
            </div>
        </Layout>
    )
  }
  
  export {MyList};