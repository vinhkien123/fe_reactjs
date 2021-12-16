import React from 'react';
import './style.scss'
function Table({ arrayTitle, arrayData, title }) {
    const elementTitle = arrayTitle?.map((item, index) => { return <th key={index}>{item.title}</th> })
    const elementData = arrayData?.map((itemData, index) => {
        return <tr>
            {arrayTitle.map((itemTitle, index) => {
                const arrayObj = Object.keys(itemData)
                const even = (element) => element == itemTitle.key
                if (arrayObj.some(even)) return <td>{itemData[`${itemTitle.key}`]}</td>
                else return <> <td></td> </>
            })}
        </tr>
    })
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h3
                            className="card-title"
                            style={{ color: "black !important" }}
                        >
                            {title}
                        </h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>{elementTitle}</tr>
                            </thead>
                            <tbody>{elementData}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;