Vue.prototype.$validate = new function() {
   let me = this;
   let LoaderDict = {
      Validate: {
         "Required": "必填项",
         "Number": "请输入合法数字",
         "Digits": "只能输入整数",
         "EqualTo": "请输入相同密码",
         "Email": "请输入正确格式的电子邮件",
         "MinLength": "请至少输入{0}位数据",
         "MinValue": "请输入大于等于{0}的数值",
         "MaxValue": "请输入小于等于{0}的数值"
      }
   }

   this.validateMessage = {
      required: LoaderDict.Validate.Required,
      number: LoaderDict.Validate.Number,
      digits: LoaderDict.Validate.Digits,
      equalTo: LoaderDict.Validate.EqualTo,
      email: LoaderDict.Validate.Email,
      minlength: LoaderDict.Validate.MinLength,
      min: LoaderDict.Validate.MinValue,
      max: LoaderDict.Validate.MaxValue
   };
   let methods = {
      required: function(value) {
         if (value === undefined || value === null || value === "") return false;
         let length = Array.isArray(value) ? value.length : $.trim(value).length;
         return length > 0;
      },
      minlength: function(value, param) {
         let length = Array.isArray(value) ? value.length : $.trim(value).length;
         return length >= param;
      },
      equalTo: function(value, param) {
         return value == param;
      },
      max: function(value, param) {
         let length = Array.isArray(value) ? value.length : $.trim(value).length;
         return length <= param;
      }
   };

   let checkRule = function(ruleName, rule, form) {
      let ruleResult = true;
      for (let ruleKey in rule) {
         if (!rule[ruleKey]) {
            return (ruleResult = true);
         }
         if (typeof methods[ruleKey] === "function") {
            let param = rule[ruleKey];
            if (ruleKey == "equalTo") param = form[rule[ruleKey]];
            let result = methods[ruleKey](form[ruleName], param);
            if (!result) {
               rule.valid = false;
               ruleResult = false;
               rule.msg = me.validateMessage[ruleKey].replace("{0}", rule[ruleKey]);
               break;
            }
         }
      }
      return ruleResult;
   };

   this.validRules = function(rules, form) {
      for (let key in rules) {
         if (!rules[key].valid || rules[key].valid == undefined) {
            Vue.set(rules[key], "valid", true);
            Vue.set(rules[key], "msg", "");
         } else rules[key].valid = true;
      }
      let rulesResult = true;
      for (let ruleName in rules) {
         rulesResult = checkRule(ruleName, rules[ruleName], form) && rulesResult;
      }
      return rulesResult;
   };
}();

Vue.prototype.$form = new function() {
   this.fillFormData = function(form, defaultForm, data) {
      if(form) {
         for (let rowKey in form) {
            form[rowKey] = null;
         }
         if (defaultForm) {
            for (let rowKey in defaultForm) {
               form[rowKey] = defaultForm[rowKey];
            }
         }
         if(data) {
            for (let rowKey in data) {
               form[rowKey] = data[rowKey];
            }
         }
      }
   }
}();
