import { ChevronRightIcon } from '@heroicons/react/24/solid'

const ListsCard = ( {title, totalPeople, list} ) => {
    const totalItems = list.length;
    let totalMoviesWatched = 0;
    list.forEach(element => element.completed ? totalMoviesWatched++ : null);

    return (
        <div className="flex flex-col items-center mb-3 border border-black bg-white rounded-lg p-4 w-80">
            <h2 className='font-medium text-2xl'>{title}</h2>
            <p>PeList en conjunto con: {totalPeople} Personas</p>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                <span className='font-light'>Peliculas: {totalItems}</span>
                <span className='font-light'>Por Ver: {totalItems - totalMoviesWatched} </span>
                <span className='font-light'>Vistas: {totalMoviesWatched} </span>
                </p>
                <p className='flex items-center gap-2'>
                {/* <span className='font-medium text-2xl'>Ir</span> */}
                <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
                </p>
        </div>
        </div>
  )
}

export {ListsCard};