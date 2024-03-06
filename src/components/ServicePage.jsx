import '../css/ServiceSection.css'


function ServicePage() {
    return (
        <div className="service-content">
            <article className='service-article-1'>
                <p className='service-article-p'>
                Гірськолижне та сноуборд навчання
                </p>
                <p2 className='service-article-p2'>
                індивідуальне та групове навчання дітей та дорослих
                </p2>
            </article>
            <article className='service-article-2'>
                <p className='service-article-p'>Тури з гірськолижним навчанням</p>
                <p2 className='service-article-p2'>Кожен тур супроводжує професійний спортсмен гірськолижник</p2>
            </article>
            <article className='service-article-3'>
                <p className='service-article-p'>Гірськолижні тури та навчання</p>
                <p2 className='service-article-p2'>Індивідуальне та групове навчання гірськолижного мистецтва доступне для дітей та дорослих.</p2>
            </article>
            <a href='/price' className='service-article-4'>
                <p>Придбати тур або мандрівку ➜</p>
            </a>
        </div>
    )
}

export default ServicePage