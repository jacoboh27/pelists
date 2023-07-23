

const MyList = ({ children, list }) => {
    const renderFunc = children || props.render;

    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">  
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Título
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Plataforma
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Género
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Agregada
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Vista
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Editar
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Eliminar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(renderFunc)}           
                    {/* { children } */}
                </tbody>
            </table>
        </div>
    );
}

export {MyList};