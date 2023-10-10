import React from 'react';
import { useParams } from 'react-router';
import ShowPortfolioProject from '../components/PortfolioUI/bookhabit/ShowPortfolioProject';
import ShowSchoolTrade from '../components/PortfolioUI/bookhabit/ShowSchoolTrade';


const BookhabitPortfolioFunction = () => {
    const {id:portfolioId} = useParams();
    console.log('포트폴리오 id',portfolioId)
    return (
        <div>
            {portfolioId === "중고거래id" &&
                <>
                    <ShowSchoolTrade/>
                </>
            }
            {portfolioId === "64b418a826eb678cc0763263" &&
                <>
                    <ShowPortfolioProject/>
                </>
            }
        </div>
    );
};

export default BookhabitPortfolioFunction;