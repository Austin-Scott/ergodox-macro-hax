import { newMacro, processAll } from "./macros";

// Point this at wherever your config root folder is
const SOURCE_DIR = "./layout_src/moonlander_tranquility-base_source/keymap.c";

const macroExtensions = {
    // Close off a markdown link with the url in the clipboard
    "00000": newMacro()
        .typeAlphanumeric('](')
        .withModifiers(newMacro().typeAlphanumeric('v'), ['SS_LCTRL'])
        .typeAlphanumeric(')'),
    // Type "-DEV"
    "00001": newMacro()
        .typeAlphanumeric('-DEV'),
    // Type "-SNAPSHOT"
    "00002": newMacro()
        .typeAlphanumeric('-SNAPSHOT'),
    // Type "MCOMSR-"
    "00003": newMacro()
        .typeAlphanumeric('MCOMSR-'),
    // Trigger vim macro
    "00004": newMacro()
        .withShift(newMacro().typeAlphanumeric('2'))
        .typeAlphanumeric('q'),
    // Type low security test account password
    "00005": newMacro()
        .withShift(newMacro().typeAlphanumeric('t'))
        .typeAlphanumeric('est')
        .withShift(newMacro().typeAlphanumeric('p'))
        .typeAlphanumeric('a55w0rd')
        .withShift(newMacro().typeAlphanumeric('1')),
    // Goto next conflict marker
    "00006": newMacro()
        .typeAlphanumeric('/')
        .withShift(newMacro().typeAlphanumeric('...'))
        .typeAlphanumeric('\n')

}

processAll(macroExtensions, SOURCE_DIR)
