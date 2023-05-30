import { PlusCircleIcon } from '@heroicons/react/24/solid'

function CreateList() {
    return (
        <div className="w-full flex flex-col items-center bg-green-100">
            <h2 className='font-medium text-2xl mt-10'>Crear Nueva PeList</h2>
            <div className="flex items-center gap-2 mb-10 cursor-pointer">
                <p className="">Create</p>
                <PlusCircleIcon className='h-6 w-6 text-black' />
            </div>
        </div>
    )
}

export {CreateList}