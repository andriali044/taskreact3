const Induk = ({ judul, children, tanggal }) => {
    return  (
        <div>
            <h3>{judul}</h3>
            {children}
            <h6>{tanggal}</h6>
        </div>
    );
}

export default Induk;