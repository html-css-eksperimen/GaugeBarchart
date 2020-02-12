export default class ChartMeteran {
    constructor(
        elementId,
        warnaLingkaran = 'ff5151',
        initValueProgress = 0,
        initValueTotal = 100,
    ) {
        this.warnaLingkaran = warnaLingkaran;
        this.lingkarGaugePerimeter = 0;

        this.nilaiTotalProgressGauge = 0;
        this.nilaiProgressGauge = 0;
        this.nilaiOffsetProgressGauge = 0;

        this.initValueProgress = initValueProgress;
        this.initValueTotal = initValueTotal;

        this.isInitGaugeReady = false;

        // ambil element radius
        this.getElementRadius(elementId);

        this.kalkulasiRadiusFillLingkaran();
    }

    getElementRadius(stringIdElement) {
        this.latarGaugeElement = document.querySelector(
            `#${stringIdElement} .latargauge`,
        );

        this.progressElement = document.querySelector(
            `#${stringIdElement} .progressgauge`,
        );

        this.teksIndikatorElement = document.querySelector(
            `#${stringIdElement} .teks_indikator p`,
        );
    }

    getRadiusLingkaran() {
        return new Promise(resolve => {
            const stringNilaiRadius = this.progressElement.getAttribute('r');
            const lingkarPerimeter =
                parseFloat(stringNilaiRadius) * 2 * Math.PI;

            resolve(lingkarPerimeter);
        });
    }

    async kalkulasiRadiusFillLingkaran() {
        try {
            this.lingkarGaugePerimeter = await this.getRadiusLingkaran();
            this.setFillRadiusLingkaran();
        } catch (err) {
            console.warn(err);
        }
    }

    setFillRadiusLingkaran() {
        this.progressElement.setAttribute('stroke', `#${this.warnaLingkaran}`);

        this.latarGaugeElement.setAttribute(
            'stroke-dasharray',
            this.lingkarGaugePerimeter,
        );

        this.progressElement.setAttribute(
            'stroke-dasharray',
            this.lingkarGaugePerimeter,
        );

        this.isInitGaugeReady = true;

        this.setNilaiGaugeProgress(this.initValueProgress, this.initValueTotal);
    }

    async setNilaiGaugeProgress(
        nilaiProgress = this.initValueProgress,
        totalProgress = this.initValueTotal,
    ) {
        const statusResultOk = await new Promise(resolve => {
            const floatNilaiProgress = parseFloat(nilaiProgress);
            const floatTotalProgress = parseFloat(totalProgress);

            if (
                floatNilaiProgress >= 0 &&
                floatTotalProgress >= 0 &&
                this.isInitGaugeReady
            ) {
                this.nilaiProgressGauge = floatNilaiProgress;
                this.nilaiTotalProgressGauge = floatTotalProgress;

                this.nilaiOffsetProgressGauge =
                    this.lingkarGaugePerimeter -
                    (this.lingkarGaugePerimeter * this.nilaiProgressGauge) /
                        this.nilaiTotalProgressGauge;

                resolve(true);
            } else {
                resolve(false);
            }
        });

        if (statusResultOk) {
            this.setProgressLingkaran();
        }
    }

    setProgressLingkaran() {
        this.progressElement.setAttribute(
            'stroke-dashoffset',
            this.nilaiOffsetProgressGauge,
        );

        // set nilai indikator
        this.teksIndikatorElement.innerText = this.nilaiProgressGauge.toFixed(
            0,
        );
    }
}
