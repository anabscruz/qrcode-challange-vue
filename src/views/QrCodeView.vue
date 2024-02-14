<script setup lang="ts">
import QrCode from '../components/QrCode.vue'
import QrCodeWrapper from '../components/QrCodeWrapper.vue'
</script>

<template>
    <main>
        <div>
            <QrCodeWrapper>
                <template #qrcode>
                    <QrCode />
                </template>
                <template #header>
                    Improve your front-end skills by building projects
                </template>
                <template #text>
                    Scan the QR code to visit Front-end Mentor and take youe coding skills to the next level.
                </template>
            </QrCodeWrapper>
        </div>
    </main>
</template>

<style>

</style>