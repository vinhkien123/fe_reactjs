import React from 'react';
import Table from '../../Component/Table';

const arrayTitle = [
    {
        title: "Heloo",
        key: "se"
    },
    {
        title: "Chào",
        key: "as"
    },
    {
        title: "H2111o",
        key: "zz"
    },
]
const arraySrouce = [
    {
        se: "chào se",
        as: "Chào as",
        zz: "H2111o1111111",
    },
    {
        se: "chào se",
        as: "Chào as",
    },
    {
        zz: "H2111o1111111",
    },
]
function Home(props) {
    return (
        <>
            <Table arrayTitle={arrayTitle} arrayData={arraySrouce} title={`Title`} />
        </>
    );
}

export default Home;