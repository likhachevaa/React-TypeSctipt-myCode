import { ScannerPageCard } from "UI/organisms/Scanner";
import { ScannerPageHeader } from "UI/organisms/Scanner/scannerPageHeader";
import { ScannerCardUpdate } from "UI/organisms/Scanner/scannerPageCardUpdate";
import { ScannerPageRates } from "../../UI/organisms/Scanner/scannerPageRates";
import { ScannerPageReviews } from "../../UI/organisms/Scanner/scannerPageReviews";
import { ScannerPageFooter } from "../../UI/organisms/Scanner/scannerPageFooter";

import Helmet from "../../UI/atoms/Helmet";
import ScannerLayout from "UI/molecules/ScannerLayout/ScannerLayout";
import { memo } from "react";

const Scan = () => {
  return (
    <>
      <Helmet title="roboScanner" />
      <ScanLayout>
        <ScanPageHeader />
        <ScanPageCard />
        <ScanCardUpdate />
        <ScanPageRates />
        <ScanPageReviews />
        <ScanPageFooter />
      </ScanLayout>
    </>
  );
};

export default memo(Scan);
