<template>
<div class="loading_content_wapper">
  <div class="loading_content">
    <svg version="1.1" id="svg_loading_content" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-143 74 80 80" style="enable-background:new -143 74 80 80;" xml:space="preserve">
    <linearGradient id="XMLID_3_" gradientUnits="userSpaceOnUse" x1="-108.7" y1="105.55" x2="-97.2" y2="105.55">
    	<stop  offset="0" style="stop-color:#FF3E5F"/>
    	<stop  offset="0.8522" style="stop-color:#E01E7F"/>
    </linearGradient>
    <polygon class="st0" points="-103,100.6 -108.7,110.5 -97.2,110.5 "/>
    <linearGradient id="XMLID_4_" gradientUnits="userSpaceOnUse" x1="-119.8" y1="126" x2="-86.1" y2="126">
    	<stop  offset="0" style="stop-color:#FF3E5F"/>
    	<stop  offset="0.8522" style="stop-color:#E01E7F"/>
    </linearGradient>
    <polygon class="st1" points="-119.8,129.5 -86.1,129.5 -89.8,122.5 -116.1,122.5 "/>
    <linearGradient id="XMLID_5_" gradientUnits="userSpaceOnUse" x1="-122.4" y1="132" x2="-83.5" y2="132">
    	<stop  offset="0" style="stop-color:#FF3E5F"/>
    	<stop  offset="0.8522" style="stop-color:#E01E7F"/>
    </linearGradient>
    <polygon class="st2" points="-122.4,134.5 -83.5,134.5 -86.1,129.5 -119.8,129.5 "/>
    <linearGradient id="XMLID_6_" gradientUnits="userSpaceOnUse" x1="-116.1" y1="119.5" x2="-89.8" y2="119.5">
    	<stop  offset="0" style="stop-color:#FF3E5F"/>
    	<stop  offset="0.8522" style="stop-color:#E01E7F"/>
    </linearGradient>
    <polygon class="st3" points="-112.4,116.5 -116.1,122.5 -89.8,122.5 -93.5,116.5 "/>
    <linearGradient id="XMLID_12_" gradientUnits="userSpaceOnUse" x1="-112.4" y1="113.5" x2="-93.5" y2="113.5">
    	<stop  offset="0" style="stop-color:#FF3E5F"/>
    	<stop  offset="0.8522" style="stop-color:#E01E7F"/>
    </linearGradient>
    <polygon class="st4" points="-97.2,110.5 -108.7,110.5 -112.4,116.5 -93.5,116.5 "/>
    <linearGradient id="XMLID_13_" gradientUnits="userSpaceOnUse" x1="-132.2994" y1="114.1511" x2="-73.7006" y2="114.1511">
    	<stop  offset="0" style="stop-color:#FF3E5F"/>
    	<stop  offset="0.8522" style="stop-color:#E01E7F"/>
    </linearGradient>
    <polygon class="st5" points="-88.9,116.2 -76.3,138 -129.7,138 -103,91.8 "/>
    </svg>
  </div>
</div>
</template>

<script>
export default {
  mounted() {

  }
}
</script>

<style lang="less">
.loading_content_wapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 500;
}
.loading_content {
    position: absolute;
    width: 120px;
    height: 120px;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -60px;

    .st0 {
      fill: url("#XMLID_3_");
      transform: translate(-18px, 0);
      .cc_a(cc_al, .1s);
    }
    .st1 {
      fill: url("#XMLID_4_");
      transform: translate(18px, 0);
      .cc_a(cc_ar);
    }
    .st2 {
      fill: url("#XMLID_5_");
      transform: translate(-18px, 0);
      .cc_a(cc_al, .15s);
    }
    .st3 {
      fill: url("#XMLID_6_");
      transform: translate(-18px, 0);
      .cc_a(cc_al, .2s);
    }
    .st4 {
      fill: url("#XMLID_12_");
      transform: translate(18px, 0);
      .cc_a(cc_ar, .25s);
    }
    .st5 {
      fill: none;
      stroke: url("#XMLID_13_");
      stroke-width: 3;
      stroke-miterlimit: 10;

      stroke-dasharray: 20;
      stroke-dashoffset: 200;
      animation: offset 1.6s ease infinite;
    }

    #svg_loading_content {
        transform: rotate(45deg);
        transform-origin: 50% 55%;
        animation: rou 3s ease infinite;
    }


    .cc_a(@a, @d:0s) {
        animation: @a .8s ease-in-out @d alternate infinite
    }
    @keyframes cc_al {
        to {
            transform: translate(18px, 0);
        }
    }
    @keyframes cc_ar {
        to {
            transform: translate(-18px, 0);
        }
    }
    @keyframes offset {
        to {
            stroke-dashoffset: 0;
        }
    }
    @keyframes rou {
        0% {
            transform: rotate(-45deg) scale(1.2);
        }
        15% {
            transform: rotate(-45deg) scale(1);
        }
        60% {
            transform: rotate(-45deg) scale(1);
        }
        100% {
            transform: rotate(675deg) scale(1.2);
        }
    }
}
</style>
