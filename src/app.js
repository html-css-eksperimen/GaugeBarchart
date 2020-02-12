import ChartMeteran from './ChartMeteran';

const chartMeterSatu = new ChartMeteran('gauge_chart', 'ffa41b', 100, 200);

setTimeout(() => {
    chartMeterSatu.setNilaiGaugeProgress(150);
}, 3000);

const chartMeterDua = new ChartMeteran('gauge_chart_dua', 'ff5151', 30, 100);

setTimeout(() => {
    chartMeterDua.setNilaiGaugeProgress(60);
}, 3000);
