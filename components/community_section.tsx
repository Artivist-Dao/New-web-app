import { NextPage } from "next";
import CommunityCard from "./community_card";
import IconArtist from "./icons/icon_artist";
import IconArtivist from "./icons/icon_artivist";
import IconNgo from "./icons/icon_ngo";

const CommunitySection: NextPage = () => {
  return (
    <div className="space-y-10">
      <h2 className="font-bold text-center text-primary tracking-wide text-3xl">
        Artivist Community
      </h2>
      <div className="flex justify-between">
        <CommunityCard
          title="Artist Community"
          description="Minting artwork through our mintbase store, and received offer by NGO to use them when starting a campaign"
          iconComponent={<IconArtist className="w-12" />}
        />
        <CommunityCard
          title="Artistic Community"
          description="Artivist will be able to interact in the community to acquire NFTs from the available campaigns"
          iconComponent={<IconArtivist className="w-12" />}
        />
        <CommunityCard
          title="NGO Community"
          description="NGO will be able to choose existing art by artist in the community and start a campaign"
          iconComponent={<IconNgo className="w-12" />}
        />
      </div>
    </div>
  );
};

export default CommunitySection;
//
