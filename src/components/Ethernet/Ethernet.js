import React, {
    useState, useEffect, useRef, 
} from 'react';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import styles from './styles.module.css';
import { MyRadioButton } from "../RadioButton"
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
});
const useStylesLabel = makeStyles({
    root: {
        position: 'relative',
        color: 'black',
        fontSize: `20px`,
        transform: "none"
    },
});
function ValidateIPaddress(str) {
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (ipformat.test(str)) return (true)
    return false
}

export function Ethernet() {
    const classes = useStyles(); const classesLabel = useStylesLabel();

    const [InputGroup, setInputGroup] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        setInputGroup(ref.current);
        if (ref && ref.current) {
            ref.current.childNodes.forEach((elem) => {
                elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                elem.childNodes[1].childNodes[0].disabled = true;
            });
        }
    }, [ref.current]);

    const [formGroup, setFormGroup] = useState(0);
    const refForm = useRef(null);
    useEffect(() => {
        setFormGroup(refForm.current);
    }, [refForm.current]);

    const [checkbox, setcheckboxRef] = useState(0);
    const checkboxRef = useRef(null);
    useEffect(() => {
        setcheckboxRef(checkboxRef.current);
    }, [checkboxRef.current]);

    const [secondInputGroup, setSecondInputGroup] = useState(0);
    const secondRef = useRef(null);
    useEffect(() => {
        setSecondInputGroup(secondRef.current);
        if (secondRef && secondRef.current) {
            secondRef.current.childNodes.forEach((elem) => {
                elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                elem.childNodes[1].childNodes[0].disabled = true;
            });
        }
    }, [secondRef.current]);

    const [thirdInputGroup, setThirdInputGroup] = useState(0);
    const thirdRef = useRef(null);
    useEffect(() => {
        setThirdInputGroup(thirdRef.current);
        if (thirdRef && thirdRef.current) {
            thirdRef.current.childNodes.forEach((elem) => {
                elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                elem.childNodes[1].childNodes[0].disabled = true;
            });
        }
    }, [thirdRef.current]);

    const [fourthInputGroup, setFourthInputGroup] = useState(0);
    const fourthRef = useRef(null);
    useEffect(() => {
        setFourthInputGroup(fourthRef.current);
        if (fourthRef && fourthRef.current) {
            fourthRef.current.childNodes.forEach((elem) => {
                elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                elem.childNodes[1].childNodes[0].disabled = true;
            });
        }
    }, [fourthRef.current]);

    const [wirelessRefGroup, setWirelessRef] = useState(0);
    const wirelessRef = useRef(null);
    useEffect(() => {
        setWirelessRef(wirelessRef.current);
        if (wirelessRef && wirelessRef.current) {
            wirelessRef.current.childNodes.forEach((elem, index) => {
                if (index > 1) {
                    elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                    elem.classList.add(`${styles.disabledText}`);
                    switch (index) {
                        case 2:
                            elem.childNodes[0].childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                            elem.childNodes[0].childNodes[1].childNodes[0].disabled = true;
                            elem.childNodes[0].childNodes[2].disabled = true;
                            break;
                        case 3:

                            elem.childNodes[0].childNodes[0].childNodes[0].disabled = true;
                            break;
                        case 5:
                            elem.childNodes[0].childNodes[0].childNodes[0].childNodes[0].disabled = true;
                            elem.childNodes[1].childNodes[0].childNodes[0].childNodes[0].disabled = true;
                            break;
                        case 7:
                            elem.childNodes[0].childNodes[0].childNodes[0].childNodes[0].disabled = true;
                            elem.childNodes[1].childNodes[0].childNodes[0].childNodes[0].disabled = true;
                            break;
                        default:
                            break;
                    }
                }
            });
        }
    }, [wirelessRef.current]);

    const [wirelessRefCheck, setWirelessRefCheckbox] = useState(0);
    const wirelessRefCheckbox = useRef(null);
    useEffect(() => {
        setWirelessRefCheckbox(wirelessRefCheckbox.current);
    }, [wirelessRefCheckbox.current]);

    const [securityInputGroup, setSecurityInputGroup] = useState(0);
    const securityRef = useRef(null);
    useEffect(() => {
        setSecurityInputGroup(securityRef.current);
        if (securityRef && securityRef.current) {
            securityRef.current.childNodes.forEach((elem) => {
                elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                elem.childNodes[1].childNodes[0].disabled = true;
            });
        }
    }, [securityRef.current]);



    //states of form
    const [pages, setPages] = useState("Obtain an IP address automatically (DHCP/BootP)");
    function handleChange(ev) {
        setPages(ev.target.value);

    };
    const [ethernetDNSradio, setEthernetDNSradio] = useState("Obtain DNS server address automatically");
    function handleChangeEthernetDNSradio(ev) {
        setEthernetDNSradio(ev.target.value);

    };

    //wireless section states
    const [wirelessName, setWirelessName] = useState("");
    function handleChangeWirelessName(ev) {
        setWirelessName(ev.target.value);

    };

    const [checkboxName, setCheckboxName] = useState(false);
    function handleChangeCheckboxName(ev) {
        setCheckboxName(ev.target.checked);
    };
    const [RadiotestName, settestName] = useState(false);
    const [Radio2testName, set2testName] = useState(false);
    return (
        <div className={styles.container}>
            <form ref={refForm} id="my-form-id" action="/" method="POST" className={styles.ethernetForm}
                onSubmit={(e) => {

                    e.preventDefault()
                    const result = {};
                    if (pages != "Obtain an IP address automatically (DHCP/BootP)") {
                        if (!ValidateIPaddress(`${ref.current.childNodes[0].childNodes[1].childNodes[0].value}`)) { alert("Incorrect Ethernet settings (Incorrect IP address)"); return }
                        if (!ValidateIPaddress(`${ref.current.childNodes[1].childNodes[1].childNodes[0].value}`)) { alert("Incorrect Ethernet settings (Incorrect Subnet Mask)"); return }
                        result.ethernetSettingIp = {
                            message: "Use the following IP address",
                            ipAddress: `${ref.current.childNodes[0].childNodes[1].childNodes[0].value}`,
                            subnetMask: `${ref.current.childNodes[1].childNodes[1].childNodes[0].value}`,
                            defaultGateway: `${ref.current.childNodes[2].childNodes[1].childNodes[0].value}`,
                        }

                    } else result.ethernetSettingIp = { message: "Obtain an IP address automatically (DHCP/BootP)" }

                    if (ethernetDNSradio != "Obtain DNS server address automatically") {
                        if (!ValidateIPaddress(`${secondRef.current.childNodes[0].childNodes[1].childNodes[0].value}`)) { alert("Incorrect Ethernet settings (Incorrect DNS Server)"); return }
                        result.ethernetSettingDns = {
                            message: "Use the following DS server address",
                            preferredDnsServer: `${secondRef.current.childNodes[0].childNodes[1].childNodes[0].value}`,
                            alternativeDnsServer: `${secondRef.current.childNodes[1].childNodes[1].childNodes[0].value}`,
                        }

                    } else result.ethernetSettingDns = { message: "Obtain DNS server address automatically" }


                    if (wirelessRefCheckbox.current.classList.contains("Mui-checked")) {
                        result.wirelessSettings = { name: wirelessName, }
                        if (checkboxName) {
                            result.wirelessSettings.securityKey = securityRef.current.childNodes[0].childNodes[1].childNodes[0].value;
                            result.wirelessSettings.message = "Enable wireless security"
                        }
                        else result.wirelessSettings.message = "Disable wireless security";

                        if (!RadiotestName) { result.wirelessSettings.ip = { message: "Obtain an IP address automatically (DHCP/BootP)" } }
                        else {
                            if (!ValidateIPaddress(`${thirdRef.current.childNodes[0].childNodes[1].childNodes[0].value}`)) { alert("Incorrect Wireless settings (Incorrect IP address)"); return }
                            if (!ValidateIPaddress(`${thirdRef.current.childNodes[1].childNodes[1].childNodes[0].value}`)) { alert("Incorrect Wireless settings (Incorrect Subnet Mask)"); return }
                            result.wirelessSettings.ip = {
                                message: "Use the following IP address",
                                ipAddress: `${thirdRef.current.childNodes[0].childNodes[1].childNodes[0].value}`,
                                subnetMask: `${thirdRef.current.childNodes[1].childNodes[1].childNodes[0].value}`,
                                defaultGateway: `${thirdRef.current.childNodes[2].childNodes[1].childNodes[0].value}`,

                            }
                        }
                        if (!Radio2testName) { result.wirelessSettings.dns = { message: "Obtain DNS server address automatically" } }
                        else {
                            if (!ValidateIPaddress(`${fourthRef.current.childNodes[0].childNodes[1].childNodes[0].value}`)) { alert("Incorrect Wireless settings (Incorrect DNS Server)"); return }
                            result.wirelessSettings.dns = {
                                message: "Use the following DS server address",
                                preferredDnsServer: `${fourthRef.current.childNodes[0].childNodes[1].childNodes[0].value}`,
                                alternativeDnsServer: `${fourthRef.current.childNodes[1].childNodes[1].childNodes[0].value}`,
                            }
                        }
                    } else result.wirelessSettings = { name: "Disabled" };

                     console.log(JSON.stringify(result));
                   // console.log(result)
                }}>
                <div className={styles.ethernet}>
                    <h3>Ethernet settings</h3>
                    <RadioGroup onChange={handleChange}
                        value={pages}
                        defaultValue="Obtain an IP address automatically (DHCP/BootP)"
                        aria-label="IP">
                        <FormControlLabel
                            value="Obtain an IP address automatically (DHCP/BootP)"
                            control={(
                                <MyRadioButton onClick={() => {
                                    ref.current.childNodes.forEach((elem) => {
                                        elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                                        elem.childNodes[1].childNodes[0].disabled = true; elem.childNodes[1].childNodes[0].value = '';
                                    });
                                }}
                                />
                            )}
                            label="Obtain an IP address automatically (DHCP/BootP)"
                        />
                        <FormControlLabel
                            value="Use the following IP address"
                            defaultValue="Use the following IP address"
                            control={(
                                <MyRadioButton onClick={() => {
                                    ref.current.childNodes.forEach((elem) => {
                                        elem.childNodes.forEach((elem) => { elem.classList.remove(`${styles.disabledText}`); });
                                        elem.childNodes[1].childNodes[0].disabled = false;
                                    });
                                }}
                                />
                            )}
                            label="Use the following IP address"
                        />
                    </RadioGroup>
                    <div ref={ref} className={styles.textFieldContainer}>
                        <div className={styles.MuiInputLabel}>
                            <InputLabel classes={classesLabel} required shrink={false} htmlFor="my-input-1">IP address:</InputLabel>
                            <Input
                                name="my-input-1" className={styles.textField} required id="my-input-1" />

                        </div>
                        <div className={styles.MuiInputLabel}>
                            <InputLabel classes={classesLabel} required shrink={false} htmlFor="my-input-2">Subnet Mask: </InputLabel>
                            <Input name="my-input-2" className={styles.textField} required id="my-input-2" />

                        </div>
                        <div className={styles.MuiInputLabel}>
                            <InputLabel classes={classesLabel} shrink={false} htmlFor="my-input-3">Default Gateway:</InputLabel>
                            <Input name="my-input-3" className={styles.textField} id="my-input-3" />

                        </div>
                    </div>

                    <RadioGroup
                        onChange={handleChangeEthernetDNSradio}
                        value={ethernetDNSradio}
                        defaultValue="Obtain DNS server address automatically"
                        aria-label="DNS" name="customized-radios">
                        <FormControlLabel
                            value="Obtain DNS server address automatically"
                            control={(
                                <MyRadioButton onClick={() => {
                                    secondRef.current.childNodes.forEach((elem) => {
                                        elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                                        elem.childNodes[1].childNodes[0].disabled = true; elem.childNodes[1].childNodes[0].value = '';
                                    });
                                }}
                                />
                            )}
                            label="Obtain DNS server address automatically"
                        />
                        <FormControlLabel
                            value="Use the following DS server address"
                            control={(
                                <MyRadioButton onClick={() => {
                                    secondRef.current.childNodes.forEach((elem) => {
                                        elem.childNodes.forEach((elem) => { elem.classList.remove(`${styles.disabledText}`); });
                                        elem.childNodes[1].childNodes[0].disabled = false;
                                    });
                                }}
                                />
                            )}
                            label="Use the following DS server address"
                        />
                    </RadioGroup>
                    <div ref={secondRef} className={styles.textFieldContainer}>
                        <div className={styles.MuiInputLabel}>
                            <InputLabel classes={classesLabel} required shrink={false} htmlFor="my-input-4">Preferred DNS server:</InputLabel>
                            <Input className={styles.textField} required id="my-input-4" />

                        </div>
                        <div className={styles.MuiInputLabel}>
                            <InputLabel classes={classesLabel} shrink={false} htmlFor="my-input-5">Alternative DNS server:</InputLabel>
                            <Input className={styles.textField} id="my-input-5" />

                        </div>
                    </div>
                </div>
                <div className={styles.wireless} ref={wirelessRef}>
                    <h3>Wireless settings</h3>
                    <FormControlLabel
                        control={(
                            <Checkbox

                                style={{
                                    color: "#137cbd",
                                }}
                                value="CheckedWifi"
                                ref={wirelessRefCheckbox}
                                inputProps={{ 'aria-label': 'CheckboxWIFI' }}
                                onClick={(e) => {
                                    if (!e.target.checked) {
                                        wirelessRef.current.childNodes.forEach((elem, index) => {
                                            if (index > 1) {
                                                elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                                                elem.classList.add(`${styles.disabledText}`);
                                                switch (index) {
                                                    case 2:
                                                        setCheckboxName(false);
                                                        elem.childNodes[0].childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                                                        elem.childNodes[0].childNodes[1].childNodes[0].disabled = true;
                                                        elem.childNodes[0].childNodes[2].disabled = true;
                                                        break;
                                                    case 3:

                                                        elem.childNodes[0].childNodes[0].childNodes[0].disabled = true;
                                                        break;

                                                    case 4:
                                                        elem.childNodes.forEach((elem) => {
                                                            elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                                                            elem.childNodes[1].childNodes[0].disabled = true; elem.childNodes[1].childNodes[0].value = '';
                                                        });
                                                        break;

                                                    case 5:
                                                        settestName(false);
                                                        elem.childNodes[0].childNodes[0].childNodes[0].childNodes[0].disabled = true;
                                                        elem.childNodes[1].childNodes[0].childNodes[0].childNodes[0].checked = false;
                                                        elem.childNodes[1].childNodes[0].childNodes[0].childNodes[0].disabled = true;
                                                        break;
                                                    case 6:
                                                        elem.childNodes.forEach(elem => {
                                                            elem.childNodes.forEach((el) => { el.classList.add(`${styles.disabledText}`); })
                                                            elem.childNodes[1].childNodes[0].disabled = true;
                                                        })
                                                        break;
                                                    case 7:
                                                        set2testName(false);
                                                        elem.childNodes[0].childNodes[0].childNodes[0].childNodes[0].disabled = true;
                                                        elem.childNodes[1].childNodes[0].childNodes[0].childNodes[0].disabled = true;
                                                        break;
                                                    case 8:
                                                        elem.childNodes.forEach(elem => {
                                                            elem.childNodes.forEach((el) => { el.classList.add(`${styles.disabledText}`); })
                                                            elem.childNodes[1].childNodes[0].disabled = true;
                                                        })
                                                        break;
                                                    default:
                                                        break;
                                                }
                                            }
                                        });
                                    } else {
                                        wirelessRef.current.childNodes.forEach((elem, index) => {
                                            if (index > 1) {
                                                elem.childNodes.forEach((elem) => { elem.classList.remove(`${styles.disabledText}`); });
                                                elem.classList.remove(`${styles.disabledText}`);
                                                switch (index) {
                                                    case 2:
                                                        elem.childNodes[0].childNodes.forEach((elem) => { elem.classList.remove(`${styles.disabledText}`); });
                                                        elem.childNodes[0].childNodes[1].childNodes[0].disabled = false;
                                                        elem.childNodes[0].childNodes[2].disabled = false;

                                                        break;
                                                    case 3:
                                                        elem.childNodes[0].childNodes[0].childNodes[0].disabled = false;
                                                        break;
                                                    // case 4:
                                                    //     elem.childNodes.forEach((elem) => {
                                                    //         elem.childNodes.forEach((elem) => { elem.classList.remove(`${styles.disabledText}`); });
                                                    //         elem.childNodes[1].childNodes[0].disabled = false;
                                                    //     });
                                                    //     break;
                                                    case 5:
                                                        elem.childNodes[0].childNodes[0].childNodes[0].childNodes[0].disabled = false;
                                                        elem.childNodes[1].childNodes[0].childNodes[0].childNodes[0].disabled = false;
                                                        break;
                                                    case 7:
                                                        elem.childNodes[0].childNodes[0].childNodes[0].childNodes[0].disabled = false;
                                                        elem.childNodes[1].childNodes[0].childNodes[0].childNodes[0].disabled = false;
                                                        break;
                                                    case 8:
                                                        elem.childNodes.forEach(elem => {
                                                            elem.childNodes.forEach((el) => { el.classList.add(`${styles.disabledText}`); })
                                                            elem.childNodes[1].childNodes[0].disabled = true;
                                                        })
                                                        break;
                                                    default:
                                                        break;
                                                }
                                            }
                                        });
                                    }
                                }}
                            />
                        )}
                        label={<>Enable wifi:</>}
                    />
                    <div className={styles.textFieldContainer}>
                        <FormControl className={styles.MuiInputLabel}>
                            <InputLabel classes={classesLabel} shrink={false} required={true} htmlFor="wireless-network-name">Wireless network name:</InputLabel>
                            <NativeSelect
                                onChange={handleChangeWirelessName}
                                value={wirelessName}
                                defaultValue=""
                                inputProps={{
                                    id: 'wireless-network-name',
                                    required: "{true}"
                                }}
                                className={styles.textField}
                            >
                                <option value="">Please select</option>
                                <option value="Var1">Var1</option>
                                <option value="Var2">Var2</option>
                                <option value="Var3">Var3</option>
                            </NativeSelect>
                            <IconButton
                            >
                                <RefreshRoundedIcon style={{
                                    padding: "10px",
                                    marginTop: "5px",
                                    color: "grey",
                                    border: "1px solid black",
                                    borderRadius: "50%",
                                }} />
                            </IconButton>


                        </FormControl>
                    </div>

                    <FormControlLabel
                        control={(
                            <Checkbox
                                checked={checkboxName}
                                style={{
                                    color: "#137cbd",
                                }}
                                value={checkboxName}
                                onChange={handleChangeCheckboxName}
                                inputProps={{ 'aria-label': 'CheckboxWirelesSecurity' }}
                                onClick={(e) => {
                                    if (!e.target.checked) {
                                        securityRef.current.childNodes.forEach((elem) => {
                                            elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                                            elem.childNodes[1].childNodes[0].disabled = true; elem.childNodes[1].childNodes[0].value = '';
                                        });
                                    } else {
                                        securityRef.current.childNodes.forEach((elem) => {
                                            elem.childNodes.forEach((elem) => { elem.classList.remove(`${styles.disabledText}`); });
                                            elem.childNodes[1].childNodes[0].disabled = false;
                                        });
                                    }
                                }}
                            />
                        )}
                        label={<>Enable wireless security:</>}
                    />
                    <div ref={securityRef} className={styles.textFieldContainer}>
                        <div className={styles.MuiInputLabel}>
                            <InputLabel classes={classesLabel} required shrink={false} htmlFor="my-input-1">Security key:</InputLabel>
                            <Input className={styles.textField} required id="my-input-1" />

                        </div>
                    </div>
                    <RadioGroup value={RadiotestName} defaultValue="Obtain an IP address automatically (DHCP/BootP)" aria-label="IP" name="customized-radios">
                        <FormControlLabel
                            value="Obtain an IP address automatically (DHCP/BootP)"
                            control={(
                                <MyRadioButton
                                    checked={!RadiotestName}
                                    onClick={() => {
                                        settestName(false);
                                        thirdRef.current.childNodes.forEach((elem) => {
                                            elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                                            elem.childNodes[1].childNodes[0].disabled = true; elem.childNodes[1].childNodes[0].value = '';
                                        });
                                    }}
                                />
                            )}
                            label="Obtain an IP address automatically (DHCP/BootP)"
                        />
                        <FormControlLabel
                            value="Use the following IP address"
                            control={(
                                <MyRadioButton
                                    checked={RadiotestName}
                                    onClick={() => {
                                        settestName(true);
                                        thirdRef.current.childNodes.forEach((elem) => {
                                            elem.childNodes.forEach((elem) => { elem.classList.remove(`${styles.disabledText}`); });
                                            elem.childNodes[1].childNodes[0].disabled = false;
                                        });
                                    }}
                                />
                            )}
                            label="Use the following IP address"
                        />
                    </RadioGroup>
                    <div ref={thirdRef} className={styles.textFieldContainer}>
                        <div className={styles.MuiInputLabel}>
                            <InputLabel classes={classesLabel} required shrink={false} htmlFor="my-input-1">IP address:</InputLabel>
                            <Input className={styles.textField} required id="my-input-1" />

                        </div>
                        <div className={styles.MuiInputLabel}>
                            <InputLabel classes={classesLabel} required shrink={false} htmlFor="my-input-2">Subnet Mask: </InputLabel>
                            <Input className={styles.textField} required id="my-input-2" />

                        </div>
                        <div className={styles.MuiInputLabel}>
                            <InputLabel classes={classesLabel} shrink={false} htmlFor="my-input-3">Default Gateway:</InputLabel>
                            <Input className={styles.textField} id="my-input-3" />

                        </div>
                    </div>

                    <RadioGroup value={Radio2testName} defaultValue="Obtain DNS server address automatically" aria-label="DNS" name="customized-radios">
                        <FormControlLabel
                            value="Obtain DNS server address automatically"
                            control={(
                                <MyRadioButton
                                    checked={!Radio2testName}
                                    onClick={() => {
                                        set2testName(false);
                                        fourthRef.current.childNodes.forEach((elem) => {
                                            elem.childNodes.forEach((elem) => { elem.classList.add(`${styles.disabledText}`); });
                                            elem.childNodes[1].childNodes[0].disabled = true; elem.childNodes[1].childNodes[0].value = '';
                                        });
                                    }}
                                />
                            )}
                            label="Obtain DNS server address automatically"
                        />
                        <FormControlLabel
                            value="Use the following DS server address"
                            control={(
                                <MyRadioButton
                                    checked={Radio2testName}
                                    onClick={() => {
                                        set2testName(true);
                                        fourthRef.current.childNodes.forEach((elem) => {
                                            elem.childNodes.forEach((elem) => { elem.classList.remove(`${styles.disabledText}`); });
                                            elem.childNodes[1].childNodes[0].disabled = false;
                                        });
                                    }}
                                />
                            )}
                            label="Use the following DS server address"
                        />
                    </RadioGroup>
                    <div ref={fourthRef} className={styles.textFieldContainer}>
                        <div className={styles.MuiInputLabel}>
                            <InputLabel classes={classesLabel} required shrink={false} htmlFor="my-input-4">Preferred DNS server:</InputLabel>
                            <Input className={styles.textField} required id="my-input-4" />

                        </div>
                        <div className={styles.MuiInputLabel}>
                            <InputLabel classes={classesLabel} shrink={false} htmlFor="my-input-5">Alternative DNS server:</InputLabel>
                            <Input className={styles.textField} id="my-input-5" />

                        </div>
                    </div>

                </div>

            </form>
            <div className={styles.buttonContainer}>
                <Button className={styles.saveButton} type="submit" form="my-form-id">Save</Button>
                <Button className={styles.saveButton} >Cancel</Button>
            </div>
        </div>
    );
}
