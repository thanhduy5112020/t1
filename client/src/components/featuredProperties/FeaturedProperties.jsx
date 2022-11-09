import useFetch from "../../hooks/useFetch"
import "./featuredProperties.css"

export const FeaturedProperties = () => {

    const {data, loading, error} = useFetch("/hotels/countByType")
    return (
        <div className="fp">
            <div className="fpItem">
                <img src="https://media.gettyimages.com/photos/modern-luxury-house-with-private-infinity-pool-in-dusk-picture-id1319453433?k=20&m=1319453433&s=612x612&w=0&h=K0U_tRmqxYG2p1zuGtcHwdQLyhpwp9tJFXKTAXGvnmM=" alt="" className="fpImg" />
                <span className="fpName">Appartement le Méridien</span>
                <span className="fpCity">Paris</span>
                <span className="fpPrice">Starting from VND 16,908,821</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://media.gettyimages.com/photos/beds-in-hotel-room-at-tourist-resort-picture-id1204811865?k=20&m=1204811865&s=612x612&w=0&h=WSjgH7_HwbNhdqdmYaMiDacWOOXAgv3PTtsQ2dVbY9Q=" alt="" className="fpImg" />
                <span className="fpName">Appartement le Méridien</span>
                <span className="fpCity">Paris</span>
                <span className="fpPrice">Starting from VND 16,908,821</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://media.gettyimages.com/photos/luxurious-master-bedroom-interior-picture-id1266155645?k=20&m=1266155645&s=612x612&w=0&h=-F1NIvzuxtUPQRnrndhTM3X4EdM-Qt1GKDfN4coCqEs=" alt="" className="fpImg" />
                <span className="fpName">Appartement le Méridien</span>
                <span className="fpCity">Paris</span>
                <span className="fpPrice">Starting from VND 16,908,821</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://media.gettyimages.com/photos/woman-enjoying-alone-in-luxury-swimming-pool-drone-view-from-above-picture-id1310663844?k=20&m=1310663844&s=612x612&w=0&h=FFvXIYhJWbzF4P-G9t5KxnjulPAjJou5GNvvbv8Z54U=" alt="" className="fpImg" />
                <span className="fpName">Appartement le Méridien</span>
                <span className="fpCity">Paris</span>
                <span className="fpPrice">Starting from VND 16,908,821</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Fabulous</span>
                </div>
            </div>

        </div>

    )
}
