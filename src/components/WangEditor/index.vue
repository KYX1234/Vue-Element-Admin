<template>
	<div :class="['editor-box', disabled ? 'editor-disabled' : '']">
		<Toolbar
			class="editor-toolbar"
			:editor="editorRef"
			:defaultConfig="toolbarConfig"
			:mode="mode"
			v-if="!hideToolBar"
		/>
		<Editor
			:style="{ height }"
			class="editor-content'"
			v-model="valueHtml"
			:defaultConfig="editorConfig"
			:mode="mode"
			@on-created="handleCreated"
		/>
	</div>
</template>

<script setup lang="ts" name="WangEditor">
import { IToolbarConfig, IEditorConfig } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'
import {uploadImg} from '@/api/upload'

// 富文本 DOM 元素
const editorRef = shallowRef()

// 实列化编辑器
const handleCreated = (editor: any) => {
  editorRef.value = editor
  // 判断当前富文本编辑器是否禁用,props发生时间要早于wangeditor实例化
	if (props.disabled) nextTick(() => editorRef.value.disable())
}

// 接收父组件参数，并设置默认值
interface RichEditorProps {
	value:string // 富文本值 ==> 必传
	toolbarConfig?: Partial<IToolbarConfig> // 工具栏配置 ==> 非必传（默认为空）
	editorConfig?: Partial<IEditorConfig> // 编辑器配置 ==> 非必传（默认为空）
	height?: string // 富文本高度 ==> 非必传（默认为 500px）
	mode?: 'default' | 'simple' // 富文本模式 ==> 非必传（默认为 default）
	hideToolBar?: boolean // 是否隐藏工具栏 ==> 非必传（默认为false）
	disabled?: boolean // 是否禁用编辑器 ==> 非必传（默认为false）
}
const props = withDefaults(defineProps<RichEditorProps>(), {
	toolbarConfig: () => {
		return {
			excludeKeys: []
		}
	},
	editorConfig: () => {
		return {
			placeholder: '请输入内容...',
			MENU_CONF: {}
		}
	},
	height: '500px',
	mode: 'default',
	hideToolBar: false,
	disabled: false
})

// 富文本的内容监听，触发父组件改变，实现双向数据绑定
const emit = defineEmits(['update:value'])
const valueHtml = computed({
	get() {
		return props.value
	},
	set(val: string) {
		// 防止富文本内容为空时，校验失败
		if (editorRef.value.isEmpty()) val = ''
		emit('update:value', val)
	}
})

//自定义图片上传
type InsertFnTypeImg = (url: string, alt?: string, href?: string) => void
props.editorConfig.MENU_CONF!["uploadImage"] = {
	async customUpload(file: File, insertFn: InsertFnTypeImg) {
		if (!uploadImgValidate(file)) return;
		let formData = new FormData();
		formData.append("file", file);
		try {
			const { data } = await uploadImg(formData);
			insertFn(data.fileUrl);
		} catch (error) {
			console.log(error);
		}
	}
};

// 图片上传前判断
const uploadImgValidate = (file: File): boolean => {
	console.log(file);
	return true;
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
	if (!editorRef.value) return
	editorRef.value.destroy()
})

defineExpose({
	editor: editorRef
})
</script>

<style scoped lang="scss"></style>
