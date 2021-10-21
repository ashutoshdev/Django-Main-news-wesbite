
 let rectangular_css=`
 #MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: ;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 0px;
  text-align: center;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 492px;
  max-height: 328px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: left;
}
#MarketGidComposite0 .mctitle a {
  font-weight: normal;
  font-size: 17px;
  line-height: 17px;
  font-style: normal;
  text-decoration: none;
  color: #515150;
  font-family: Roboto;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  text-align: center;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  font-style: normal;
  text-decoration: none;
  color: #bbbbbb;
  font-family: Roboto;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: ;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 32.33333333%;
  max-width: 32.33333333%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 90px;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b;
  text-decoration: underline !important;
  text-decoration: none !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #2b397b;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #2b397b;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 110% !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 22px !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  width: 100% !important;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  max-width: 492px;
}
#MarketGidComposite0 .mghead {
  font-family: Roboto !important;
  color: #2b397b;
  font-size: 17px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mghead {
  margin: 5px 0 0 0 !important;
  font-weight: 600 !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
.image-with-text {
  min-height: 1px;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgheader {
  border-bottom: 1px solid #2b397b !important;
  padding-bottom: 3px;
  margin-bottom: 10px;
}
`;



    let cards_css=`
    #MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: ;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 0px;
  text-align: center;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 492px;
  max-height: 328px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: left;
}
#MarketGidComposite0 .mctitle a {
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  font-style: normal;
  text-decoration: none;
  color: #868585;
  font-family: Roboto;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  text-align: left;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
  font-style: normal;
  text-decoration: none;
  color: #868585;
  font-family: Roboto;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: ;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 32.33333333%;
  max-width: 32.33333333%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 90px;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #2b397b;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #2b397b;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 110% !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  width: 100% !important;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  max-width: 492px;
}
#MarketGidComposite0 .mghead {
  font-family: Roboto !important;
  color: #2b397b;
  font-size: 17px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 3.5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
.image-with-text {
  min-height: 1px;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgline {
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  -o-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
}
#MarketGidComposite0 .mgline .image-container {
  display: inline-block !important;
}
#MarketGidComposite0 .mgline .mgtobottom {
  left: 0;
  right: 0;
}
#MarketGidComposite0 .mgline .mctitle {
  margin-top: 5px;
  min-height: 35px;
  overflow: hidden;
  padding: 0 7px;
}
#MarketGidComposite0 .mgline .mcdesc {
  padding: 0 20px;
}
#MarketGidComposite0 .mgline .mcdomain {
  padding: 4px 20px;
}
#MarketGidComposite0 .mcdomain a {
  line-height: 14px;
  margin-top: 0;
  margin-bottom: 5px;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  margin-right: 5px;
}
  `;



	let light_card_style=`
       #MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: ;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 0px;
  text-align: center;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 492px;
  max-height: 328px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: center;
}
#MarketGidComposite0 .mctitle a {
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  font-style: normal;
  text-decoration: none;
  color: #555555;
  font-family: Roboto;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  text-align: left;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
  font-style: normal;
  text-decoration: none;
  color: #868585;
  font-family: Roboto;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: ;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 32.33333333%;
  max-width: 32.33333333%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 90px;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
  box-shadow: 0px 1px 2px 0px #dedede;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline .text_on_hover {
  padding: 15px 20px 14px;
  min-height: 90px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b;
  text-decoration: underline !important;
  text-decoration: none !important;
  line-height: 30px !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #2b397b;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #2b397b;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 110% !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 30px !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  width: 100% !important;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  max-width: 492px;
}
#MarketGidComposite0 .mghead {
  font-family: Roboto !important;
  color: #2b397b;
  font-size: 17px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 3.5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
.image-with-text {
  min-height: 1px;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
`;



     let square_css=`
     #MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: ;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 0px;
  text-align: center;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 328px;
  max-height: 328px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: center;
}
#MarketGidComposite0 .mctitle a {
  font-weight: normal;
  font-size: 15px;
  line-height: 15px;
  font-style: normal;
  text-decoration: none;
  color: #333333;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  text-align: center;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  font-style: normal;
  text-decoration: none;
  color: #bbbbbb;
  font-family: 'Open Sans', sans-serif;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: ;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 32.33333333%;
  max-width: 32.33333333%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 90px;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #2b397b;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #2b397b;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 110% !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  width: 100% !important;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  max-width: 328px;
}
#MarketGidComposite0 .mghead {
  font-family: 'Open Sans', sans-serif !important;
  color: #2b397b;
  font-size: 17px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
.image-with-text {
  min-height: 1px;
}
`;

  let in_article_widget_main=`
    #MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: #ffffff;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 0px;
  text-align: center;
}
#MarketGidComposite0 div.mcimg {
  float: left;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 370px;
  max-height: 200px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: left;
  padding-top: 10px;
}
#MarketGidComposite0 .mctitle a {
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  font-style: normal;
  text-decoration: none;
  color: #474747;
  font-family: Roboto;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: left;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 11px;
  line-height: 11px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  text-align: left;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  font-style: normal;
  text-decoration: none;
  color: #bbbbbb;
  font-family: 'Open Sans', sans-serif;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: #ffffff;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: #e9e9e9;
  border-width: 1px;
  width: 49%;
  max-width: 49%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 510px;
}
#MarketGidComposite0 img.mcimg {
  display: block;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
div[class*=mg_addad] {
  margin-top: -4px;
  margin-bottom: 2px;
}
div[id*=TrafficmediaComposite] div[class*=widgets_logo] a {
  bottom: -18px;
}
#MarketGidComposite0 .mgheader {
  padding-top: 10px;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #2b397b;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #2b397b;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .mgtobottom,
#MarketGidComposite0 .mgline .fake {
  display: none;
}
#MarketGidComposite0 .mghead {
  font-family: Roboto !important;
  color: #2b397b;
  font-size: 14px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
#MarketGidComposite0 .mgline .image-with-text {
  min-height: 1px;
  display: flex;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 49%;
}
#MarketGidComposite0 .mgline {
  margin: 0 0.5%;
  padding: 10px 0!important;
  border-style: solid none none;
}
#MarketGidComposite0 .mgline .text-elements {
  width: 60%;
  float: left;
  flex-grow: 1;
}
#MarketGidComposite0 .mgline .image-container {
  overflow: hidden;
}
#MarketGidComposite0 div.mcimg {
  max-width: 37%;
  margin-right: 10px;
}
#MarketGidComposite0 .mctitle {
  padding-top: 0;
  margin-top: 0;
}
#MarketGidComposite0 .mgline .mctitle a {
  display: inline-block;
  line-height: 18px;
}
#MarketGidComposite0 .mgtobottom {
  position: relative;
}
#MarketGidComposite0 .mgline .mgtobottom,
#MarketGidComposite0 .mgline .fake {
  display: block;
}
#MarketGidComposite0 .mcdomain {
  padding: 0;
  margin-top: 3px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0;
  padding-bottom: 3px;
}
#MarketGidComposite0 .mgline:nth-child(5),
#MarketGidComposite0 .mgline:nth-child(6) {
  border-style: solid none;
}
@media screen and (max-width: 480px) {
  .mgbox,
  #MarketGidComposite0 .mgline {
    min-width: inherit!important;
  }
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 0 !important;
  }
  #MarketGidComposite0 .mgline:nth-child(6) {
    display: none;
  }
  #MarketGidComposite0 .mgline .mctitle a {
    font-size: 20px;
    line-height: 20px;
  }
  #MarketGidComposite0 .mgline .mgtobottom .mcdomain a {
    font-size: 13px;
    line-height: 13px;
  }

    `;

    let in_article_widget_carousel=`
       #MarketGidComposite0 .mgbox {
  height: auto;
  line-height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  padding: 0;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: #ffffff;
}
#MarketGidComposite0 .mgheader {
  width: 100%;
  display: block;
}
#MarketGidComposite0 .mghead {
  font-family: Roboto !important;
  color: #2b397b !important;
  font-size: 14px !important;
  text-transform: uppercase !important;
  text-align: left;
  display: block;
  margin: 8px 0 0px 8px;
  float: left;
}
#MarketGidComposite0 .mg_addad {
  text-align: right;
  opacity: .5;
  margin: 6px 15px 0 0;
  float: right;
}
#MarketGidComposite0 .mg_addad:hover {
  opacity: .8;
}
#MarketGidComposite0 .mg_addad a {
  color: #000;
  font: normal normal normal 8px "Open sans", sans-serif;
  cursor: pointer;
  text-decoration: none;
}
#MarketGidComposite0 .mg_addad a img {
  display: inline-block;
  height: 16px;
  padding-bottom: 0;
  width: auto;
  border: none;
  margin: 0 -5px -4px 0;
}
#MarketGidComposite0 .mgslider {
  width: 10000px;
  position: relative;
  left: 0;
  padding-left: 0;
  -webkit-transition: top 1s ease-out 0.5s;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
#MarketGidComposite0 .mgline {
  float: left;
  display: block;
  border: 1px solid #bfbfbf;
  margin: 10px 5px;
  padding: 0;
  opacity: 1;
  border-style: solid;
  background-color: #ffffff;
  border-color: #e9e9e9;
  border-width: 1px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b !important;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline .image-with-text {
  display: block;
  width: 100%;
  min-height: 1px;
  margin: 0 auto;
}
#MarketGidComposite0 .mcimg {
  width: 100%;
  height: auto;
  display: block;
}
#MarketGidComposite0 .mcimg .image-container {
  width: auto;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .text-elements {
  display: block;
}
#MarketGidComposite0 .mgline .text-elements .mctitle {
  margin: 5px 15px 0 10px;
  display: block;
  height: 50px;
  overflow: hidden;
  text-align: left;
}
#MarketGidComposite0 .mgline .text-elements .mctitle a {
  color: #4f81bd;
  font-family: Roboto !important;
  text-decoration: none;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 13px;
}
#MarketGidComposite0 .mgline .text-elements .fake {
  display: block;
  visibility: hidden;
  height: 2px;
}
#MarketGidComposite0 .mgline .text-elements .fake .mcdomain {
  display: block !important;
  overflow: hidden;
  padding: 0 4px 4px;
  text-align: left !important;
}
#MarketGidComposite0 .mgline .text-elements .fake .mcdomain a {
  padding-top: 5px !important;
  color: #bbbbbb !important;
  text-decoration: none;
  font: normal normal 10px/10px "Open sans", sans-serif;
}
#MarketGidComposite0 .mgline .text-elements .mgtobottom {
  display: block;
  width: 100%;
  margin: 0 auto;
  text-align: left;
}
#MarketGidComposite0 .mgline .text-elements .mgtobottom .mcdomain {
  display: block;
  overflow: hidden;
  padding: 0 4px 4px;
  font-family: 'Open Sans', sans-serif !important;
  text-align: left !important;
  text-decoration: none !important;
  font-style: normal !important;
  font-weight: normal !important;
}
#MarketGidComposite0 .mgline .text-elements .mgtobottom .mcdomain a {
  padding: 0 0 2px 6px;
  color: #bbbbbb !important;
  text-align: left !important;
  text-decoration: none !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 10px;
}
#MarketGidComposite0 .mgslider-next,
#MarketGidComposite0 .mgslider-prev {
  display: block;
  cursor: pointer;
  position: absolute;
  top: 45%;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  -webkit-transition: top 1s ease-out 0.5s;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
#MarketGidComposite0 .mgslider-next img,
#MarketGidComposite0 .mgslider-prev img {
  width: 20px;
  height: 40px;
}
#MarketGidComposite0 .mgslider-next:hover,
#MarketGidComposite0 .mgslider-prev:hover {
  opacity: .8;
}
#MarketGidComposite0 .mgslider-next {
  right: 0;
  border-left: 1px solid #bfbfbf;
}
#MarketGidComposite0 .mgslider-prev {
  border-right: 1px solid #bfbfbf;
}
#MarketGidComposite0 .mcdesc {
  display: none;
}
`;

let header_widget_rectangular_css=`
    #MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: ;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 0px;
  text-align: center;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 492px;
  max-height: 328px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: left;
}
#MarketGidComposite0 .mctitle a {
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  font-style: normal;
  text-decoration: none;
  color: #333333;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  text-align: center;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  font-style: normal;
  text-decoration: none;
  color: #bbbbbb;
  font-family: 'Open Sans', sans-serif;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: ;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: ;
  border-width: 0px;
  width: 24%;
  max-width: 24%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 90px;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #2b397b;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #2b397b;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 110% !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  width: 100% !important;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  max-width: 492px;
}
#MarketGidComposite0 .mghead {
  font-family: 'Open Sans', sans-serif !important;
  color: #2b397b;
  font-size: 14px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
.image-with-text {
  min-height: 1px;
}

`;


let header_widget_square_css=`
#MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: ;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 0px;
  text-align: center;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 328px;
  max-height: 328px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: center;
}
#MarketGidComposite0 .mctitle a {
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  font-style: normal;
  text-decoration: none;
  color: #333333;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  text-align: left;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  font-style: normal;
  text-decoration: none;
  color: #bbbbbb;
  font-family: 'Open Sans', sans-serif;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: ;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: ;
  border-width: 0px;
  width: 32.33333333%;
  max-width: 32.33333333%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 90px;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #2b397b;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #2b397b;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 110% !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  width: 100% !important;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  max-width: 328px;
}
#MarketGidComposite0 .mghead {
  font-family: 'Open Sans', sans-serif !important;
  color: #2b397b;
  font-size: 14px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
.image-with-text {
  min-height: 1px;
}
`;

let header_widget_carousel_css=`
#MarketGidComposite0 .mgbox {
  height: auto;
  line-height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  padding: 0;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: #ffffff;
}
#MarketGidComposite0 .mgheader {
  width: 100%;
  display: block;
}
#MarketGidComposite0 .mghead {
  font-family: 'Open Sans', sans-serif !important;
  color: #2b397b !important;
  font-size: 14px !important;
  text-transform: uppercase !important;
  text-align: left;
  display: block;
  margin: 8px 0 0px 8px;
  float: left;
}
#MarketGidComposite0 .mg_addad {
  text-align: right;
  opacity: .5;
  margin: 6px 15px 0 0;
  float: right;
}
#MarketGidComposite0 .mg_addad:hover {
  opacity: .8;
}
#MarketGidComposite0 .mg_addad a {
  color: #000;
  font: normal normal normal 8px "Open sans", sans-serif;
  cursor: pointer;
  text-decoration: none;
}
#MarketGidComposite0 .mg_addad a img {
  display: inline-block;
  height: 16px;
  padding-bottom: 0;
  width: auto;
  border: none;
  margin: 0 -5px -4px 0;
}
#MarketGidComposite0 .mgslider {
  width: 10000px;
  position: relative;
  left: 0;
  padding-left: 0;
  -webkit-transition: top 1s ease-out 0.5s;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
#MarketGidComposite0 .mgline {
  float: left;
  display: block;
  border: 1px solid #bfbfbf;
  margin: 10px 5px;
  padding: 0;
  opacity: 1;
  border-style: solid;
  background-color: #ffffff;
  border-color: ;
  border-width: 0px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b !important;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline .image-with-text {
  display: block;
  width: 100%;
  min-height: 1px;
  margin: 0 auto;
}
#MarketGidComposite0 .mcimg {
  width: 100%;
  height: auto;
  display: block;
}
#MarketGidComposite0 .mcimg .image-container {
  width: auto;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .text-elements {
  display: block;
}
#MarketGidComposite0 .mgline .text-elements .mctitle {
  margin: 5px 15px 0 10px;
  display: block;
  height: 50px;
  overflow: hidden;
  text-align: left;
}
#MarketGidComposite0 .mgline .text-elements .mctitle a {
  color: #4f81bd;
  font-family: 'Open Sans', sans-serif !important;
  text-decoration: none;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 13px;
}
#MarketGidComposite0 .mgline .text-elements .fake {
  display: block;
  visibility: hidden;
  height: 2px;
}
#MarketGidComposite0 .mgline .text-elements .fake .mcdomain {
  display: block !important;
  overflow: hidden;
  padding: 0 4px 4px;
  text-align: left !important;
}
#MarketGidComposite0 .mgline .text-elements .fake .mcdomain a {
  padding-top: 5px !important;
  color: #bbbbbb !important;
  text-decoration: none;
  font: normal normal 10px/10px "Open sans", sans-serif;
}
#MarketGidComposite0 .mgline .text-elements .mgtobottom {
  display: block;
  width: 100%;
  margin: 0 auto;
  text-align: left;
}
#MarketGidComposite0 .mgline .text-elements .mgtobottom .mcdomain {
  display: block;
  overflow: hidden;
  padding: 0 4px 4px;
  font-family: 'Open Sans', sans-serif !important;
  text-align: left !important;
  text-decoration: none !important;
  font-style: normal !important;
  font-weight: normal !important;
}
#MarketGidComposite0 .mgline .text-elements .mgtobottom .mcdomain a {
  padding: 0 0 2px 6px;
  color: #bbbbbb !important;
  text-align: left !important;
  text-decoration: none !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 10px;
}
#MarketGidComposite0 .mgslider-next,
#MarketGidComposite0 .mgslider-prev {
  display: block;
  cursor: pointer;
  position: absolute;
  top: 45%;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  -webkit-transition: top 1s ease-out 0.5s;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
#MarketGidComposite0 .mgslider-next img,
#MarketGidComposite0 .mgslider-prev img {
  width: 20px;
  height: 40px;
}
#MarketGidComposite0 .mgslider-next:hover,
#MarketGidComposite0 .mgslider-prev:hover {
  opacity: .8;
}
#MarketGidComposite0 .mgslider-next {
  right: 0;
  border-left: 1px solid #bfbfbf;
}
#MarketGidComposite0 .mgslider-prev {
  border-right: 1px solid #bfbfbf;
}
#MarketGidComposite0 .mcdesc {
  display: none;
}
`;

let sidebar_widget_cards_css=`
#MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: ;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 0px;
  text-align: center;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 492px;
  max-height: 328px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: left;
}
#MarketGidComposite0 .mctitle a {
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  font-style: normal;
  text-decoration: none;
  color: #868585;
  font-family: Roboto;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  text-align: left;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
  font-style: normal;
  text-decoration: none;
  color: #868585;
  font-family: Roboto;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: ;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 99%;
  max-width: 99%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 90px;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #2b397b;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #2b397b;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 110% !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  width: 100% !important;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  max-width: 492px;
}
#MarketGidComposite0 .mghead {
  font-family: Roboto !important;
  color: #2b397b;
  font-size: 14px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 3.5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
.image-with-text {
  min-height: 1px;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgline {
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  -o-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
}
#MarketGidComposite0 .mgline .image-container {
  display: inline-block !important;
}
#MarketGidComposite0 .mgline .mgtobottom {
  left: 0;
  right: 0;
}
#MarketGidComposite0 .mgline .mctitle {
  margin-top: 5px;
  min-height: 35px;
  overflow: hidden;
  padding: 0 7px;
}
#MarketGidComposite0 .mgline .mcdesc {
  padding: 0 20px;
}
#MarketGidComposite0 .mgline .mcdomain {
  padding: 4px 20px;
}
#MarketGidComposite0 .mcdomain a {
  line-height: 14px;
  margin-top: 0;
  margin-bottom: 5px;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  margin-right: 5px;
}
`;

let sidebar_widget_rectangular_two_css=`
    #MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: ;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 0px;
  text-align: center;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 492px;
  max-height: 328px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: left;
}
#MarketGidComposite0 .mctitle a {
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  font-style: normal;
  text-decoration: none;
  color: #333333;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  text-align: center;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  font-style: normal;
  text-decoration: none;
  color: #bbbbbb;
  font-family: 'Open Sans', sans-serif;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: ;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 99%;
  max-width: 99%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 90px;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #2b397b;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #2b397b;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 110% !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  width: 100% !important;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  max-width: 492px;
}
#MarketGidComposite0 .mghead {
  font-family: 'Open Sans', sans-serif !important;
  color: #2b397b;
  font-size: 14px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
.image-with-text {
  min-height: 1px;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
 }
`;

let sidebar_widget_rectangular_css=`
    #MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: ;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 4px;
  text-align: center;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 492px;
  max-height: 328px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: center;
}
#MarketGidComposite0 .mctitle a {
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  font-style: normal;
  text-decoration: none;
  color: #333333;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  text-align: center;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  font-style: normal;
  text-decoration: none;
  color: #bbbbbb;
  font-family: 'Open Sans', sans-serif;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: ;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 99%;
  max-width: 99%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 90px;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #2b397b;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #2b397b;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 110% !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  width: 100% !important;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  max-width: 492px;
}
#MarketGidComposite0 .mghead {
  font-family: 'Open Sans', sans-serif !important;
  color: #2b397b;
  font-size: 14px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
.image-with-text {
  min-height: 1px;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgline:hover {
  background: #2b397b;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #ffffff;
  text-decoration: none !important;
}
#MarketGidComposite0 .mgline:hover .mcdomain a {
  color: #ffffff;
}
`;

let sidebar_widget_SMALL_css=`
    #MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: ;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 0px;
  text-align: center;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 328px;
  max-height: 328px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: center;
}
#MarketGidComposite0 .mctitle a {
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  font-style: normal;
  text-decoration: none;
  color: #333333;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  text-align: center;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  font-style: normal;
  text-decoration: none;
  color: #bbbbbb;
  font-family: 'Open Sans', sans-serif;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: ;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 49%;
  max-width: 49%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 90px;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #2b397b;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #2b397b;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 110% !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  width: 100% !important;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  max-width: 328px;
}
#MarketGidComposite0 .mghead {
  font-family: 'Open Sans', sans-serif !important;
  color: #2b397b;
  font-size: 14px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
.image-with-text {
  min-height: 1px;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgline[max-width~="150px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="150px"] .mgbuybox {
  display: none !important;
}
`;

let Headline_pic_widget=`
    #MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: ;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 0px;
  text-align: center;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 492px;
  max-height: 328px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: center;
}
#MarketGidComposite0 .mctitle a {
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  font-style: normal;
  text-decoration: none;
  color: #333333;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  font-style: normal;
  text-decoration: none;
  color: #bbbbbb;
  font-family: 'Open Sans', sans-serif;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: ;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 32.33333333%;
  max-width: 32.33333333%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 90px;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #ffffff;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #ffffff;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #ffffff;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  width: 100% !important;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  max-width: 492px;
}
#MarketGidComposite0 .mghead {
  font-family: Roboto !important;
  color: #2b397b;
  font-size: 14px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: none;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
.image-with-text {
  min-height: 1px;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 98% !important;
    margin: 1% !important;
    max-width: 98% !important;
  }
}
#MarketGidComposite0 .mgline {
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  -o-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
}
#MarketGidComposite0 .mgline .image-container {
  display: inline-block !important;
}
#MarketGidComposite0 .mgline .mgtobottom {
  left: 0;
  right: 0;
}
#MarketGidComposite0 .mgline .mctitle {
  margin-top: 5px;
  min-height: 35px;
  overflow: hidden;
  padding: 0 7px;
}
#MarketGidComposite0 .mgline .mcdesc {
  padding: 0 20px;
}
#MarketGidComposite0 .mgline .mcdomain {
  padding: 4px 20px;
}
#MarketGidComposite0 .mcdomain a {
  line-height: 14px;
  margin-top: 0;
  margin-bottom: 5px;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  margin-right: 5px;
}
#MarketGidComposite0 .mgbox div.mcimg {
  margin: 0 auto;
  bottom: 0;
  display: block;
  margin: 0;
  text-align: center;
  padding: 0px;
}
#MarketGidComposite0 .mgbox img {
  border: 0 !important;
}
#MarketGidComposite0 .mgbox .image-with-text {
  margin: 0 auto;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  position: relative;
}
#MarketGidComposite0 .mgbox .text-elements {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
}
#MarketGidComposite0 .mgbox .text-elements a {
  color: #ffffff;
}
#MarketGidComposite0 .mgbox .text-elements > div {
  padding-bottom: 5px;
}
#MarketGidComposite0 .mgbox .mgline {
  min-width: 140px !important;
}
#MarketGidComposite0 .mgbox div.mcprice {
  display: none;
}
#MarketGidComposite0 .mgline {
  border-radius: 0px;
  box-shadow: none;
  overflow: unset;
}
#MarketGidComposite0 .mgline .image-with-text .text-elements {
  background: transparent linear-gradient(to bottom, transparent 0px, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.9) 100%) repeat scroll 0 0 !important;
}
`;


let mobile_site_widget=`
   #MarketGidComposite0 .mgresponsive {
  display: inherit;
}
#MarketGidComposite0 .mgbox {
  padding: 0 !important;
  position: relative !important;
  text-align: center;
  vertical-align: top !important;
  margin: 0 auto;
  border-style: solid;
  border-width: 0px;
  border-color: ;
  background-color: ;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 100% !important;
  transition: none !important;
  box-sizing: border-box;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
}
#MarketGidComposite0 div.mcimg {
  padding: 0px;
  text-align: center;
}
#MarketGidComposite0 img.mcimg {
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 100% !important;
  height: auto !important;
  max-width: 200px;
  max-height: 150px;
  box-sizing: border-box;
  display: block;
}
#MarketGidComposite0 .mctitle {
  margin-top: 10px;
  text-align: center;
}
#MarketGidComposite0 .mctitle a {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #333333;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdesc {
  display: none;
  text-align: center;
}
#MarketGidComposite0 .mcdesc a {
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #666666;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  text-align: center;
}
#MarketGidComposite0 .mcdomain a {
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  font-style: normal;
  text-decoration: none;
  color: #bbbbbb;
  font-family: 'Open Sans', sans-serif;
  padding: 4px;
  display: block;
  overflow: hidden;
}
#MarketGidComposite0 .mcdomain a img.mcimgsrc {
  vertical-align: bottom;
  margin-bottom: -3px;
  height: 20px;
  width: 20px;
  display: inline-block;
}
#MarketGidComposite0 .mgline {
  background: none repeat scroll 0 0;
  background-color: ;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  zoom: 1;
  display: inline;
  padding: 0 !important;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px;
  width: 49%;
  max-width: 49%;
  box-sizing: border-box;
  margin: 10px 0.5%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
}
#MarketGidComposite0 .mgline .image-container {
  position: relative;
}
#MarketGidComposite0 .mgline .image-container .mcimgad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}
#MarketGidComposite0 .mgline {
  vertical-align: top;
}
#MarketGidComposite0 .mgline,
#MarketGidComposite0 .mgbox {
  min-width: 90px;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mcdesc {
  display: none !important;
}
@supports not (flex-wrap: wrap) {
  .mgbox {
    display: block !important;
  }
  #MarketGidComposite0 .mgline {
    display: inline-block !important;
  }
}
.text-elements a {
  text-decoration: none;
}
#MarketGidComposite0 div.mcprice {
  text-align: center;
}
#MarketGidComposite0 div.mcprice span {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: false;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox,
#MarketGidComposite0 div.mcprice {
  display: none;
}
#MarketGidComposite0 span.mcpriceold {
  text-decoration: line-through !important;
}
@media (max-width: 480px) {
  #MarketGidComposite0 .mgline {
    width: 48% !important;
    margin: 1% !important;
    max-width: 48% !important;
  }
}
#MarketGidComposite0 .mgpopular {
  background-color: rgba(255, 0, 0, 0.2) !important;
  border-color: rgba(255, 90, 0, 0.3) !important;
}
#MarketGidComposite0 .mgbox {
  width: 100%;
  max-width: 100%;
  background: #fff;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 5px;
  padding-bottom: 2px;
  overflow: hidden;
}
.toaster .mcdomain {
  display: none !important;
}
#MarketGidComposite0 .mghead {
  color: #2b397b !important;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#AdWidgetContainer {
  position: fixed;
  width: 100%;
  z-index: 9999;
}
#AdWidgetContainer > div {
  background: #ffffff none repeat scroll 0 0%;
  padding: 6px 9px;
  margin: auto;
  position: relative;
  /*max-width: 480px;*/
  /*width: 100%;*/
}
#AdWidgetContainer .mgheader .mghead {
  color: #999999 !important;
  text-transform: none;
  font-weight: 200;
  font-size: 11px;
  margin-right: 4px;
  margin-top: 2px;
}
#AdWidgetContainer .mgheader a {
  color: #333333 !important;
  text-transform: lowercase;
  font-weight: 200;
  font-family: "Open Sans";
  font-size: 11px;
  line-height: 12px;
  vertical-align: bottom;
  display: inline-block;
}
#AdWidgetContainer .mgheader > div {
  text-align: left;
}
#AdWidgetContainer .mgheader > div > a img {
  height: 13px;
}
#AdWidgetContainer.toaster > div {
  top: 0;
  max-height: 30%;
  box-shadow: 0px -10px 15px 0px rgba(0, 0, 0, 0.5);
}
#AdWidgetContainer.toaster {
  bottom: 0;
  opacity: 0;
  -webkit-transform: translate(0, 170%);
  -moz-transform: translate(0, 170%);
  -ms-transform: translate(0, 170%);
  -o-transform: translate(0, 170%);
  transform: translate(0, 170%);
  -webkit-transition: transform 1s linear;
  -moz-transition: transform 1s linear;
  -ms-transition: transform 1s linear;
  -o-transition: transform 1s linear;
  transition: transform 1s linear;
}
#AdWidgetContainer.toaster #adwidget-close-action {
  display: inline;
  z-index: 9999;
  box-shadow: none;
  position: absolute;
  background: #fff;
  float: right;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI5MDYuMTM3cHgiIGhlaWdodD0iOTA2LjE5N3B4IiB2aWV3Qm94PSIwIDAgOTA2LjEzNyA5MDYuMTk3IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA5MDYuMTM3IDkwNi4xOTciIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMyQzNFNTAiIGQ9Ik04ODMuOTEyLDgxMi44NjZsLTcwLjk5LDcxLjIyNmMtMTQuMzU0LDE0LjIzMi0zNC4xNDYsMjIuMTA1LTU0LjA1MSwyMi4xMDRjLTE5Ljc5MSwwLjAwMS0zOS42OTUtNy44NzEtNTMuOTMyLTIyLjEwNUw0NTMuMDYzLDYzMi4yMTlMMjAxLjE5LDg4NC4wOTJjLTE0LjIzNSwxNC4yMzMtMzQuMTQsMjIuMTA1LTUzLjkzMSwyMi4xMDVjLTE5LjkwNSwwLTM5LjY5NS03Ljg3My01NC4wNS0yMi4xMDZsLTcwLjk4Ny03MS4yMjVDNy44NjgsNzk4LjYzMiwwLjAwMSw3NzguODQxLDAuMDAxLDc1OC45MzNzNy44NjctMzkuNjk5LDIyLjIyMS01My45MzVMMjczLjk4LDQ1My4xMjdMMjIuMjIxLDIwMS4zMUM3Ljg2NiwxODcuMDE2LDAsMTY3LjE2NSwwLDE0Ny4zMmMwLTE5Ljg1Miw3Ljg2Ni0zOS43MDEsMjIuMjIxLTUzLjk5MWw3MC45ODctNzEuMTA3QzEwNy41NjMsNy45MjcsMTI3LjM1NCwwLDE0Ny4yNTgsMGMxOS43OTEsMCwzOS42OTYsNy45MjYsNTMuOTMxLDIyLjIyMmwyNTEuODc0LDI1MS44MTNMNzA0Ljk0MSwyMi4yMjJDNzE5LjE3Niw3LjkyNyw3MzkuMDgyLDAsNzU4Ljg3MywwYzE5LjkwNCwwLDM5LjY5NSw3LjkyNiw1NC4wNTEsMjIuMjIybDcwLjk5LDcxLjEwN2MxNC4zNTUsMTQuMjksMjIuMjIzLDM0LjE0LDIyLjIyMyw1My45OTFjLTAuMDAyLDE5Ljg0NS03Ljg2NywzOS42OTUtMjIuMjIzLDUzLjk5TDYzMi4xNTYsNDUzLjEyOGwyNTEuNzU4LDI1MS44NzFjMTQuMzU0LDE0LjIzNCwyMi4yMjEsMzQuMDI0LDIyLjIyMSw1My45MzhDOTA2LjEzMyw3NzguODQsODk4LjI2OCw3OTguNjMxLDg4My45MTIsODEyLjg2NnoiLz48L3N2Zz4=);
  background-position-y: 10px;
  background-position-x: 15px;
  right: 0px;
  top: -19px;
  border-top-left-radius: 25px;
  width: 37px;
  height: 37px;
  padding: 7px;
  background-repeat: no-repeat;
  background-size: 27px;
}
#AdWidgetContainer.toaster .adwidget-close-wrapper {
  max-width: 480px;
  box-shadow: none;
  background: transparent;
}
#AdWidgetContainer.toaster #adwidget-close-action > div {
  width: 3px;
  height: 10px;
  transform: rotate(-315deg);
  background: #27387A;
  position: absolute;
  right: 4px;
}
#AdWidgetContainer.toaster #adwidget-close-action > div + div {
  transform: rotate(315deg);
}
#AdWidgetContainer.dragdown {
  opacity: 0;
  -webkit-transform: translate(0, -100%);
  -moz-transform: translate(0, -100%);
  -ms-transform: translate(0, -100%);
  -o-transform: translate(0, -100%);
  transform: translate(0, -100%);
  margin: -100% 0 0;
  position: absolute;
  top: 0;
  background: #ffffff none repeat scroll 0 0%;
}
#AdWidgetContainer #adwidget-continue-cation {
  display: block;
  margin: auto;
  width: 200px;
  height: 60px;
  background: #27387A;
  line-height: 60px;
  text-align: center;
  font-family: "Open Sans";
  font-size: 28px;
  color: #FFFFFF;
  font-weight: bold;
  letter-spacing: 0px;
  margin-top: 45%;
  display: none;
}
@media all and (orientation: landscape) {
  #AdWidgetContainer #adwidget-continue-cation {
    margin-top: 10px;
  }
}
#AdWidgetContainer.dragdown > div {
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.5);
}
#AdWidgetContainer.interstitial {
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  display: none;
  background: rgba(255, 255, 255, 0.9);
}
#AdWidgetContainer.interstitial > div {
  background: transparent;
}
#AdWidgetContainer > div.transparent {
  background: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  top: 0;
  z-index: -1;
  opacity: 0.89;
}
#AdWidgetContainer.interstitial .mgheader > div {
  text-align: right;
}
#AdWidgetContainer.interstitial .mgheader .mghead {
  font-family: "Open Sans";
  font-weight: bold;
  font-size: 11px;
  text-transform: uppercase;
  color: #222222 !important;
  letter-spacing: 0px;
  line-height: 18px;
}
#AdWidgetContainer .mgheader > div > a img {
  margin-bottom: 0;
  height: 12px;
  vertical-align: bottom;
}
#AdWidgetContainer .mgheader {
  margin: 0px 0px 5px;
}
#MarketGidComposite0 .mgline {
  width: 48% !important;
  margin: 0 1% !important;
  max-width: 48% !important;
}
#MarketGidComposite0 .mgline .image-container {
  display: block!important;
  max-height: 120px;
  overflow: hidden;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
  opacity: 1 !important;
}
#MarketGidComposite0 .mgline {
  position: relative;
}
#MarketGidComposite0 .mgline .fake {
  visibility: hidden;
  position: relative;
  padding-top: 4px;
}
#MarketGidComposite0 .mgline:hover .mctitle a {
  color: #2b397b;
  text-decoration: underline !important;
}
#MarketGidComposite0 .mgline:hover .mcpriceold + .mcprice,
#MarketGidComposite0 .mgline:hover .mcpriceold {
  visibility: hidden;
}
#MarketGidComposite0 .mgline:hover .mcdiscount {
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 5px;
}
#MarketGidComposite0 .mgarrowbox {
  position: relative;
  background: #2b397b;
  width: 55%;
  height: 22px;
  margin: 0px;
  border-color: transparent;
  border-left-color: #2b397b;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 .mgarrowbox:after {
  left: 100%;
  top: 50%;
  content: " ";
  height: 0px;
  width: 0px;
  position: absolute;
  pointer-events: none;
  margin-top: -11px;
  border: solid 11px;
  border-color: inherit;
}
#MarketGidComposite0 .mgbuybox {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
}
#MarketGidComposite0 .mctitle {
  margin-top: 2px;
  line-height: 1 !important;
}
#MarketGidComposite0 .mctitle a {
  line-height: 110% !important;
}
#MarketGidComposite0 .mcdesc {
  margin-top: 0;
  margin-bottom: 2px;
}
#MarketGidComposite0 .mcdesc a {
  line-height: 1.5 !important;
}
#MarketGidComposite0 div.mcprice {
  margin-top: 5px;
  line-height: 12 px !important;
}
#MarketGidComposite0 div.mgbuybox,
#MarketGidComposite0 div.mgarrowbox {
  display: none;
}
#MarketGidComposite0 .mgtobottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  width: 100% !important;
  margin: 0 auto;
}
#MarketGidComposite0 .mgline .image-with-text,
#MarketGidComposite0 .mgline .mgtobottom {
  max-width: 200px;
}
#MarketGidComposite0 .mghead {
  font-family: 'Open Sans', sans-serif !important;
  color: #2b397b;
  font-size: 14px !important;
  text-transform: uppercase !important;
}
#MarketGidComposite0 .mcpriceold {
  float: left;
  padding-left: 5px;
}
#MarketGidComposite0 .mcdiscount {
  display: none;
}
#MarketGidComposite0 .mcdomain {
  display: block;
  overflow: hidden;
  padding: 4px;
}
#MarketGidComposite0 .mcdomain a {
  padding: 0px;
  display: block;
  padding-top: 5px;
  padding-bottom: 2px;
  overflow: hidden;
}
#MarketGidComposite0 div.mcprice,
#MarketGidComposite0 div.mcriceold {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}
#MarketGidComposite0 div.mcpriceold {
  text-decoration: line-through !important;
}
#MarketGidComposite0 .mgline[max-width~="120px"] .mgarrowbox,
#MarketGidComposite0 .mgline[max-width~="120px"] .mgbuybox {
  display: none !important;
}
.image-with-text {
  min-height: 1px;
}
#AdWidgetContainer.toaster .mgheader > div {
  float: left;
}
#AdWidgetContainer.toaster #adwidget-close-action {
  top: -25px;
  box-sizing: initial;
}
#MarketGidComposite0 img.mcimg {
  margin: 0;
}
`;