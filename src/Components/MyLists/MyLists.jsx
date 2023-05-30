import { Link } from "react-router-dom";
import { ListsCard } from "../ListsCard/ListsCard";
import { ChevronRightIcon } from '@heroicons/react/24/solid'


const MyLists = ( {lists} ) => {
    return (
        <div className="w-full flex flex-col items-center bg-white">
            <h2 className='font-medium text-2xl mt-10'>Mis PeLists</h2>
            <div className="my-10 flex flex-row gap-5">
                {
                    lists.map((list, index) => (
                        <Link key={index} to={`/my-lists/${index}`}>
                            <ListsCard  
                                title={list.title}
                                totalPeople={list.with.length}
                                list={list.list}
                            />
                        </Link>
                        // <div>
                        //     <p>{list.title}</p>
                        //     <p>Cantidad: {list.list.length}</p>
                        // </div>
                    ))
                }
            </div>
            <div className="flex items-center gap-2 mb-10 cursor-pointer">
                <p className="">Ver todas</p>
                <ChevronRightIcon className='h-6 w-6 text-black' />
            </div>
        </div>
    )
}

export {MyLists};