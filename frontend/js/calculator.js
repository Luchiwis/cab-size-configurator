class Elevator {
    constructor() {
        // set all models
        // this.model =
        // this.type =
        // this.door =
        // this.landingDoor =
        // this.innerCabWidth =
        // this.innerCabDepth =
        // this.innerCabHeight =
        // this.hoistwayWidth =
        // this.hoistwayDepth =
        this.wallThickness = 1.5;
    }


    // getters and setters

    get model() {
        return document.querySelector('input[name="model"]:checked').value;
    }
    set model(value) {
        if (value == null) {
            document.querySelector('input[name="model"]:checked').checked = false;
        } else {
            document.querySelector('input[name="model"][value="' + value + '"]').checked = true;
        }
    }

    get type() {
        return document.querySelector('input[name="type"]:checked').value;
    }
    set type(value) {
        if (value == null) {
            document.querySelector('input[name="type"]:checked').checked = false;
        } else {
            document.querySelector('input[name="type"][value="' + value + '"]').checked = true;
        }
    }

    get door() {
        return document.querySelector('input[name="door"]:checked').value;
    }
    set door(value) {
        if (value == null) {
            document.querySelector('input[name="door"]:checked').checked = false;
        } else {
            document.querySelector('input[name="door"][value="' + value + '"]').checked = true;
        }
    }

    get landingDoor() {
        return document.querySelector('input[name="landing"]').checked;
    }
    set landingDoor(value) {
        document.querySelector('input[name="landing"]').checked = value;
    }

    get innerCabWidth() {
        return document.querySelector('input[name="inner-width"]').value;
    }
    set innerCabWidth(value) {
        document.querySelector('input[name="inner-width"]').value = value;
    }

    get innerCabDepth() {
        return document.querySelector('input[name="inner-depth"]').value;
    }
    set innerCabDepth(value) {
        document.querySelector('input[name="inner-depth"]').value = value;
    }

    get innerCabHeight() {
        return document.querySelector('input[name="inner-height"]').value;
    }
    set innerCabHeight(value) {
        document.querySelector('input[name="inner-height"]').value = value;
    }

    get hoistwayWidth() {
        return document.querySelector('input[name="hoistway-width"]').value;
    }
    set hoistwayWidth(value) {
        document.querySelector('input[name="hoistway-width"]').value = value;
    }

    get hoistwayDepth() {
        return document.querySelector('input[name="hoistway-depth"]').value;
    }
    set hoistwayDepth(value) {
        document.querySelector('input[name="hoistway-depth"]').value = value;
    }

    get overalWidth() {
        this.innerCabWidth = value + this.wallThickness;
    }

    get overalDepth() {
        this.innerCabDepth = value + this.wallThickness;
    }

}

elevator = new Elevator();