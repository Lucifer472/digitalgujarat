import Script from "next/script";

export const Scripts = () => {
  return (
    <div>
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        async
        strategy="afterInteractive"
        crossOrigin="anonymous"
      ></Script>
      <Script
        strategy="afterInteractive"
        id="google-cmd"
      >{`window.googletag = window.googletag || { cmd: [] };`}</Script>
      <Script strategy="afterInteractive" id="inter-ads" async>
        {`
        window.googletag = window.googletag || {cmd: []};
        var interstitialSlot;
        googletag.cmd.push(function() {
        interstitialSlot = googletag.defineOutOfPageSlot('/22989534981/MS_Digitalgujarat_INTERSTITIAL', googletag.enums.OutOfPageFormat.INTERSTITIAL);
        if (interstitialSlot) {
            interstitialSlot.addService(googletag.pubads());
            }
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        });
    `}
      </Script>
      <Script strategy="afterInteractive" id="inter-ads-push" async>
        {`
            googletag.cmd.push(function() {
                googletag.display(interstitialSlot);
            });
    `}
      </Script>
      {/* <Script
        strategy="afterInteractive"
        src="https://adxtag.online/js/monetiscope_digitalgujarat_pop_up.js"
      ></Script> */}
      {/* <Script strategy="afterInteractive" id="bottom-anchor">
        {`  window.googletag = window.googletag || {cmd: []};
            var anchorSlot;
            googletag.cmd.push(function() {
            anchorSlot = googletag.defineOutOfPageSlot('/22989534981/MS_Digitalgujarat_BOTTOMANCHOR', googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR);
            if (anchorSlot) {
                    anchorSlot.addService(googletag.pubads());
                    }
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
            });`}
      </Script> */}
      <Script
        id="tag-manager-script"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-MQ3RBX3WBZ"
      ></Script>
      <Script strategy="afterInteractive" id="tag-manger" async>
        {`
           window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MQ3RBX3WBZ');
          `}
      </Script>
    </div>
  );
};
