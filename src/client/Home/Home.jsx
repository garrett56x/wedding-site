import React from "react";
import Hero from "../Hero/Hero.jsx";
import BackgroundImage from "../../assets/hands.jpg";
import "./Home.css";

export default function Home() {
  const images = require.context('../../assets', true);
  const howWeMet = images('./btp.jpg');
  const proposal = images('./proposal.png');

  return (
    <div className="home">
      <Hero backgroundImage={BackgroundImage} phrase="OUR STORY" />
      <div className="content">
        <div className="how-we-met">
          <h2>How We Met Test</h2>
          <img className="section-image" src={howWeMet} />
          <p>
            After barely missing each other for almost a decade, we finally met one day when mutual friends invited us to
            watch the Gonzaga game at Belltown Pizza. Unlike our friends, we both arrived on time. We had nobody to talk to,
            so Garrett made up an excuse about not being able to see the TV so he could sit next to Angie and strike up a
            conversation. After bonding over our mutual love for the Zags, tequila, and girl scout cookies we exchanged
            numbers and the rest is history.
          </p>
        </div>
        <div className="proposal">
          <h2>The Proposal</h2>
          <img className="section-image" src={proposal} />
          <p>
            One of Angie's life goals is to complete the Asian Trilogy Peak Challenge; Mt. Fuji, Jade Mountain, and Mt.
            Kinabalu. On our most recent trip to Taiwan, Garrett agreed to climb Jade Mountain (12,966') with Angie.
            Before the trip, Garrett decided he was going to propose to Angie at the summit. The first day of the hike took about eight hours to get to the cabin where we could rest and eat some food in
            preparation for an early morning. That night, we made friends with our bunk-mates Bob & Cate. We got up at 1:30 AM
            to prepare for the sunrise hike. When Cate went off to the bathroom, Bob asked Garrett if he could do him a favor at
            the summit. Bob explained that he wanted to propose to Cate, and he was wondering if Garrett could film it. Completely caught
            off-guard, and with Angie sitting right next to him, Garrett tried to play it cool and agreed to help Bob out. So we
            put on our head-lamps and started the final leg of our hike in the dark... about 30 minutes after the other couple.
            Garrett was stressing the whole time that he and Angie had to get to the summit before the other couple so he could
            propose first. As luck would have it, for us at least, we caught up to the other couple about half-way through this
            last leg. They were struggling with altitude sickness, so we wished them the best and kept moving. A couple hours
            later, we reached the summit right at sunrise. Garrett got down on one knee, and bacause of the events that transpired,
            Angie thought he was joking and said, "Wait, what? No, are you joking?" until it finally sank in that Garrett was
            proposing for real and she said yes.
          </p>
        </div>
      </div>
    </div>
  );
}
