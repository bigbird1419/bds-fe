import Button from '../../../../components/Button'

export default function MenuItem({ category }) {

    return (
        <div className="wrapper">
            <Button to={category.path} className={'block w-full px-2 py-3 font-medium text-white text-sm border-b border-b-slate-200'}>
                {category.icon}
                <span className='ml-2'>{category.title}</span>
            </Button>
        </div>
    )
}