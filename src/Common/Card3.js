import React from "react";
import Business from "../assets/images/BusinessLaw.jpeg";
import MacroEconomics from "../assets/images/MacroEconomics.jpeg";
import MicroEconomics from "../assets/images/MicroEconomics.jpeg";
import CorporateLaw from "../assets/images/CorporateLaw.jpeg";
import FinancialAccounting from "../assets/images/FinancialAccounting.jpeg";
import CostAccounts from "../assets/images/CostAccounts.jpeg";
import "./Card3.css";

const Card3 = () => {
  return (
    <>
      <div class="container_card">
        <div class="box">
          <div class="card_3">
            <div class="imgBx">
              <img src={Business} alt="images" />
            </div>
            <div class="details">
              <h2>
                Business Law
                <br />
                <span>B.COM semester - 01</span>
              </h2>
            </div>
          </div>

          <div class="card_3">
            <div class="imgBx">
              <img src={MicroEconomics} alt="images" />
            </div>
            <div class="details">
              <h2>
                Micro Economics
                <br />
                <span>B.COM semester - 01</span>
              </h2>
            </div>
          </div>

          <div class="card_3">
            <div class="imgBx">
              <img src={FinancialAccounting} alt="images" />
            </div>
            <div class="detailsFA">
              <h2>
                Financial Accounting
                <br />
                <span>B.COM semester - 01</span>
              </h2>
            </div>
          </div>
          <div class="card_3">
            <div class="imgBx">
              <img src={CorporateLaw} alt="images" />
            </div>
            <div class="details">
              <h2>
                Corporate Law
                <br />
                <span>B.COM semester - 02</span>
              </h2>
            </div>
          </div>

          <div class="card_3">
            <div class="imgBx">
              <img src={MacroEconomics} alt="images" />
            </div>
            <div class="details">
              <h2>
                Macro Economics
                <br />
                <span>B.COM semester - 02</span>
              </h2>
            </div>
          </div>

          <div class="card_3">
            <div class="imgBx">
              <img src={CostAccounts} alt="images" />
            </div>
            <div class="details">
              <h2>
                Cost Accounting
                <br />
                <span>B.COM semester - 02</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
