<template>
    <div class="w-full flex items-center">
        <div className="flex flex-col justify-center items-start text-primary py-[20px]">
            <div className="font-medium text-[18px] font-mono text-button mb-[0px]">Hi There, My Name Is</div>
            <div className="flex flex-col justify-center items-start mb-[30px] font-bold font-sans">
                <div className="text-[#ccd6f6] mb-0 text-clamp">David Okih.</div>
                <div className="text-primary text-clamp">I Build Web Applicatons.</div>
            </div>
            <div className="text-[18px] text-primary mb-[50px] max-w-[540px] font-sans font-medium">I’m a <span
                    class="text-button">software
                    developer</span> with a focus on crafting exceptional digital experiences through <span
                    class="text-button">innovative
                    design</span> and <span class="text-button">development practices</span>. My expertise lies in
                creating <span class="text-button">robust</span>
                and <span class="text-button">user-friendly</span>
                applications,
                blending design and development to deliver outstanding results.
            </div>
            <Button :title=" title " :padding=" padding " />
        </div>
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue';
import { ref } from 'vue';
const title = ref('Check out my course!');
const padding = ref('py-4 px-5');
</script>