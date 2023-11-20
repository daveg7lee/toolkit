import Script from "next/script";

export default function Adsense() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4793524087489955"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4793524087489955"
        data-ad-slot="6795519816"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script>(adsbygoogle = window.adsbygoogle || []).push({});</Script>
    </>
  );
}
