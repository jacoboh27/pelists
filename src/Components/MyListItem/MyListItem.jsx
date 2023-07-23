import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { TrashIcon } from '@heroicons/react/24/solid';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

const MyListItem = ({key, title, platform, completed}) => {
    return (
        <tr key={key} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {title}
            </th>
            <td className="px-6 py-4">
                {platform}
            </td>
            <td className="px-6 py-4">
                Género
            </td>
            <td className="px-6 py-4">
                30-05-2023
            </td>
            {completed ? (
                <td className="px-6 py-4">
                    <CheckCircleIcon  fill="none" strokeWidth={1.5} stroke="currentColor" className='h-6 w-6 cursor-pointer' />
                </td>
            ) : (
                <td className="px-6 py-4">
                    <ExclamationCircleIcon className='h-6 w-6 text-emerald-400 cursor-pointer' />
                </td>
            )}
            <td className="px-6 py-4">
                <PencilSquareIcon className='h-6 w-6 cursor-pointer' />
            </td>
            <td className="px-6 py-4">
                <TrashIcon className='h-6 w-6 cursor-pointer' />
            </td>
        </tr>
    );
}

export {MyListItem};