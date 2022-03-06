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
        .typeAlphanumeric('TestPa55w0rd!'),
    // Goto next conflict marker
    "00006": newMacro()
        .typeAlphanumeric('/====\nzz'),
    // Type (k)claw hammer sku
    "00007": newMacro()
        .typeAlphanumeric('2434249'),
    // Goto tomcat JVM directory in linux
    // "00008": newMacro()
    //     .typeAlphanumeric('cd /app/tomcat/\n ls\ncd ')
    //     .tapKey('X_TAB'),
    // Firefox window switcher
    "00009": newMacro()
        .withModifiers(newMacro().typeAlphanumeric('t'), ['SS_LWIN'])
        .tapKey('X_RIGHT')
        .tapKey('X_RIGHT')
        .tapKey('X_UP'),
    // IntelliJ window switcher
    "00010": newMacro()
        .withModifiers(newMacro().typeAlphanumeric('t'), ['SS_LWIN'])
        .tapKey('X_RIGHT')
        .tapKey('X_RIGHT')
        .tapKey('X_RIGHT')
        .tapKey('X_RIGHT')
        .tapKey('X_RIGHT')
        .tapKey('X_UP'),
    // VS Code window switcher
    "00011": newMacro()
        .withModifiers(newMacro().typeAlphanumeric('t'), ['SS_LWIN'])
        .tapKey('X_RIGHT')
        .tapKey('X_RIGHT')
        .tapKey('X_RIGHT')
        .tapKey('X_RIGHT')
        .tapKey('X_UP'),
    // Type enable-backend: local
    "00012": newMacro()
        .typeAlphanumeric('enable-backend: local'),
    // Vim jump to start of last line not starting with whitespace
    "00013": newMacro()
        .typeAlphanumeric('?^\\w\nzt:noh\n')

}

processAll(macroExtensions, SOURCE_DIR)
