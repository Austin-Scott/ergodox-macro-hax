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
    // Type "MCOM-"
    "00003": newMacro()
        .typeAlphanumeric('MCOM-'),
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
    "00008": newMacro()
        .typeAlphanumeric('cd /app/tomcat/\n ls\ncd ')
        .tapKey('X_TAB'),
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
    // Vim scroll right
    "00012": newMacro()
        .typeAlphanumeric('zL'),
    // Vim scroll left
    "00013": newMacro()
        .typeAlphanumeric('zH'),
    // Vim combo macros
    "00014": newMacro()
        .typeAlphanumeric('ciw'),
    "00015": newMacro()
        .typeAlphanumeric('ciW'),
    "00016": newMacro()
        .typeAlphanumeric('cis'),
    "00017": newMacro()
        .typeAlphanumeric('cip'),
    "00018": newMacro()
        .typeAlphanumeric('ci\''),
    "00019": newMacro()
        .typeAlphanumeric('ci"'),
    "00020": newMacro()
        .typeAlphanumeric('f(ci('),
    "00021": newMacro()
        .typeAlphanumeric('f)ci('),
    "00022": newMacro()
        .typeAlphanumeric('ci('),
    "00023": newMacro()
        .typeAlphanumeric('ci{'),
    "00024": newMacro()
        .typeAlphanumeric('ci['),
    "00025": newMacro()
        .typeAlphanumeric('caw'),
    "00026": newMacro()
        .typeAlphanumeric('caW'),
    "00027": newMacro()
        .typeAlphanumeric('cas'),
    "00028": newMacro()
        .typeAlphanumeric('cap'),
    "00029": newMacro()
        .typeAlphanumeric('ca\''),
    "00030": newMacro()
        .typeAlphanumeric('ca"'),
    "00031": newMacro()
        .typeAlphanumeric('f(ca('),
    "00032": newMacro()
        .typeAlphanumeric('f)ca('),
    "00033": newMacro()
        .typeAlphanumeric('ca('),
    "00034": newMacro()
        .typeAlphanumeric('ca{'),
    "00035": newMacro()
        .typeAlphanumeric('ca['),
    "00036": newMacro()
        .typeAlphanumeric('diw'),
    "00037": newMacro()
        .typeAlphanumeric('diW'),
    "00038": newMacro()
        .typeAlphanumeric('dis'),
    "00039": newMacro()
        .typeAlphanumeric('dip'),
    "00040": newMacro()
        .typeAlphanumeric('di\''),
    "00041": newMacro()
        .typeAlphanumeric('di"'),
    "00042": newMacro()
        .typeAlphanumeric('f(di('),
    "00043": newMacro()
        .typeAlphanumeric('f)di('),
    "00044": newMacro()
        .typeAlphanumeric('di('),
    "00045": newMacro()
        .typeAlphanumeric('di{'),
    "00046": newMacro()
        .typeAlphanumeric('di['),
    "00047": newMacro()
        .typeAlphanumeric('daw'),
    "00048": newMacro()
        .typeAlphanumeric('daW'),
    "00049": newMacro()
        .typeAlphanumeric('das'),
    "00050": newMacro()
        .typeAlphanumeric('dap'),
    "00051": newMacro()
        .typeAlphanumeric('da\''),
    "00052": newMacro()
        .typeAlphanumeric('da"'),
    "00053": newMacro()
        .typeAlphanumeric('f(da('),
    "00054": newMacro()
        .typeAlphanumeric('f)da('),
    "00055": newMacro()
        .typeAlphanumeric('da('),
    "00056": newMacro()
        .typeAlphanumeric('da{'),
    "00057": newMacro()
        .typeAlphanumeric('da['),
    "00058": newMacro()
        .typeAlphanumeric('viw'),
    "00059": newMacro()
        .typeAlphanumeric('viW'),
    "00060": newMacro()
        .typeAlphanumeric('vis'),
    "00061": newMacro()
        .typeAlphanumeric('vip'),
    "00062": newMacro()
        .typeAlphanumeric('vi\''),
    "00063": newMacro()
        .typeAlphanumeric('vi"'),
    "00064": newMacro()
        .typeAlphanumeric('f(vi('),
    "00065": newMacro()
        .typeAlphanumeric('f)vi('),
    "00066": newMacro()
        .typeAlphanumeric('vi('),
    "00067": newMacro()
        .typeAlphanumeric('vi{'),
    "00068": newMacro()
        .typeAlphanumeric('vi['),
    "00069": newMacro()
        .typeAlphanumeric('vaw'),
    "00070": newMacro()
        .typeAlphanumeric('vaW'),
    "00071": newMacro()
        .typeAlphanumeric('vas'),
    "00072": newMacro()
        .typeAlphanumeric('vap'),
    "00073": newMacro()
        .typeAlphanumeric('va\''),
    "00074": newMacro()
        .typeAlphanumeric('va"'),
    "00075": newMacro()
        .typeAlphanumeric('f(va('),
    "00076": newMacro()
        .typeAlphanumeric('f)va('),
    "00077": newMacro()
        .typeAlphanumeric('va('),
    "00078": newMacro()
        .typeAlphanumeric('va{'),
    "00079": newMacro()
        .typeAlphanumeric('va['),
    "00080": newMacro()
        .typeAlphanumeric('yiw'),
    "00081": newMacro()
        .typeAlphanumeric('yiW'),
    "00082": newMacro()
        .typeAlphanumeric('yis'),
    "00083": newMacro()
        .typeAlphanumeric('yip'),
    "00084": newMacro()
        .typeAlphanumeric('yi\''),
    "00085": newMacro()
        .typeAlphanumeric('yi"'),
    "00086": newMacro()
        .typeAlphanumeric('yi('),
    "00087": newMacro()
        .typeAlphanumeric('yi{'),
    "00088": newMacro()
        .typeAlphanumeric('yi['),
    "00089": newMacro()
        .typeAlphanumeric('yaw'),
    "00090": newMacro()
        .typeAlphanumeric('yaW'),
    "00091": newMacro()
        .typeAlphanumeric('yas'),
    "00092": newMacro()
        .typeAlphanumeric('yap'),
    "00093": newMacro()
        .typeAlphanumeric('ya\''),
    "00094": newMacro()
        .typeAlphanumeric('ya"'),
    "00095": newMacro()
        .typeAlphanumeric('ya('),
    "00096": newMacro()
        .typeAlphanumeric('ya{'),
    "00097": newMacro()
        .typeAlphanumeric('ya[')

}

processAll(macroExtensions, SOURCE_DIR)
