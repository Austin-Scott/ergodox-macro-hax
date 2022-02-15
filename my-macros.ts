import { newMacro, processAll } from "./macros";

// Point this at wherever your config root folder is
const SOURCE_DIR = "./layout_src/moonlander_tranquility-base_source/keymap.c";

const macroExtensions = {
    // Close off a markdown link with the url in the clipboard
    "00000": newMacro()
        .typeAlphanumeric('](')
        .withModifiers(newMacro().typeAlphanumeric('v'), ['X_LCTRL'])
        .typeAlphanumeric(')'),
    // Type "-DEV"
    "00001": newMacro()
        .typeAlphanumeric('-DEV'),
    // Type "-SNAPSHOT"
    "00002": newMacro()
        .typeAlphanumeric('-SNAPSHOT'),
}

processAll(macroExtensions, SOURCE_DIR)
