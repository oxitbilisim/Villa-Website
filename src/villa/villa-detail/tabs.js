import React, {Component} from 'react';
import PropTypes from "prop-types";
import VillaInfo from "./villa-info";
import VillaExplanation from "./villa-explanation";
import VillaFeatures from "./villa-features";
import VillaLocation from "./villa-location";
import VillaPrices from "./villa-prices";
import VillaCalendar from "./villa-calendar";

const Tabs = (props) => {

    return <div className={"ltn__apartments-plan-area mt-5"}>


                    <div
                        className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-left">
                        <div className="nav">
                            <a data-bs-toggle="tab" href="#liton_tab_3_1">Açıklama</a>
                            <a data-bs-toggle="tab" href="#liton_tab_3_2">Özellikler</a>
                            <a data-bs-toggle="tab" href="#liton_tab_3_3">Konum</a>
                            <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_4">Fiyatlar</a>
                            <a data-bs-toggle="tab" href="#liton_tab_3_5">Takvim</a>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade" id="liton_tab_3_1">
							<VillaExplanation data={props.data?.icerik}/>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_2">
							<VillaFeatures data={props.data?.ozellik} dataPool={props.data?.gorunum}/>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_3">
							<VillaLocation data={props.data?.lokasyon}/>
                        </div>
                        <div className="tab-pane fade active show" id="liton_tab_3_4">
							<VillaPrices data={props.data?.periyodikFiyat}/>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_5">
							<VillaCalendar reservations={props.reservations} />
                        </div>
                    </div>



    </div>
}

Tabs.propTypes = {
    data: PropTypes.any,
    reservations: PropTypes.array,
};

Tabs.defaultProps = {
    data: null,
    reservations:[]
};

export default Tabs
