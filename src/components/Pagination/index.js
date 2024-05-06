import classNames from 'classnames'
import { memo, useEffect, useState, useCallback } from 'react'

import styles from './Pagination.module.css'
import Button from '../Button'

const cx = classNames.bind(styles)

function Pagination({ totalPage, page, setPage = () => { } }) {
    const [pages, setPages] = useState([])

    const handleSetPages = (page, totalPage) => {
        let arr = []
        for (let i = page - 1; i <= totalPage; i++) {
            if (i > 0 && arr.length < 5) {
                arr.push(i)
            }
        }
        setPages(arr)
    }
    const handlePrevPage = useCallback(() => {
        if (page > 1) {
            setPage(val => val - 1)
        }
    }, [page, setPage])
    const handleNextPage = useCallback(() => {
        if (page < totalPage) {
            setPage(val => val + 1)
        }
    }, [page, setPage, totalPage])
    const handleSetPage = useCallback((page) => {
        setPage(page)
    }, [setPage])

    useEffect(() => {
        handleSetPages(page, totalPage)
    }, [page, totalPage])

    return (
        <div>
            {pages.length > 0 &&
                <div className="mt-6 flex justify-center">
                    <Button normal onClick={() => handlePrevPage()}
                        className={cx('block text-sm px-3 py-1 m-2 rounded', page === 1 ? 'cursor-not-allowed' : 'bg-colorPrimary text-white')}
                    >
                        <i className="fa-solid fa-angle-left mr-2"></i>
                        Trang trước
                    </Button>

                    {pages.map((pg) => (
                        <Button key={pg} normal onClick={() => handleSetPage(pg)}
                            className={cx('block text-sm px-3 py-1 m-2 rounded', page === pg ? 'bg-colorPrimary text-white' : 'border-2 border-gray-400')}
                        >
                            {pg}
                        </Button>
                    ))}
                    <Button normal onClick={() => handleNextPage()}
                        className={cx('block text-sm px-3 py-1 m-2 rounded', page === totalPage + 1 ? 'cursor-not-allowed' : 'bg-colorPrimary text-white')}
                    >
                        Trang sau
                        <i className="fa-solid fa-angle-right ml-2"></i>
                    </Button>
                </div>
            }
        </div>
    )
}

export default memo(Pagination)