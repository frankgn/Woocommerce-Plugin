!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;c>e;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return d}function d(){if(b(document.body).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}function f(){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;c>e;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||("false"===d?!1:d)),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b("[data-"+p+"-id="+d.replace(new RegExp("/","g"),"\\/")+"]")}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=this;e.settings=b.extend({},t,c),e.index=b[p].lookup.push(e)-1,e.state=u.CLOSED,e.$overlay=b("."+k("overlay")),e.$overlay.length||(e.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),d.append(e.$overlay)),e.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),e.$modal=a,e.$modal.addClass(q+" "+k("is-initialized")+" "+e.settings.modifier+" "+k("is",u.CLOSED)),e.$wrapper=b("<div>").addClass(k("wrapper")+" "+e.settings.modifier+" "+k("is",u.CLOSED)).hide().append(e.$modal),d.append(e.$wrapper),e.$wrapper.on("click."+q,"[data-"+p+'-action="close"]',function(a){a.preventDefault(),e.close()}),e.$wrapper.on("click."+q,"[data-"+p+'-action="cancel"]',function(a){a.preventDefault(),e.$modal.trigger(v.CANCELLATION),e.settings.closeOnCancel&&e.close(v.CANCELLATION)}),e.$wrapper.on("click."+q,"[data-"+p+'-action="confirm"]',function(a){a.preventDefault(),e.$modal.trigger(v.CONFIRMATION),e.settings.closeOnConfirm&&e.close(v.CONFIRMATION)}),e.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&e.settings.closeOnOutsideClick&&e.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:""},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}();m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-"+p+"-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(c.settings.hashTracking&&c.$modal.attr("data-"+p+"-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-"+p+"-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b(document).on("click","[data-"+p+"-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-"+p+"-target"),e=b("[data-"+p+"-id="+d+"]");b[p].lookup[e.data(p)].open()}),b(document).find("."+q).each(function(a,c){var d=b(c),e=d.data(p+"-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b(document).on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});

jQuery(document).ready( function($) {

    $('#invoicesTable').DataTable({
        "aoColumnDefs": [
            { 'bSortable': false, 'aTargets': [ 6,7,8 ] }
        ],
        "language":{
            "decimal":        "",
            "emptyTable":     "No hay información disponible",
            "info":           "Mostrando del _START_ al _END_ de _TOTAL_ registros",
            "infoEmpty":      "Mostrando del 0 al 0 de 0 registros",
            "infoFiltered":   "(filtrado de _MAX_ registros totales)",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu":     "Mostrar _MENU_ registros",
            "loadingRecords": "Cargando...",
            "processing":     "Procesando...",
            "search":         "Buscar:",
            "zeroRecords":    "No se encontraron resultados",
            "paginate": {
                "first":      "Primero",
                "last":       "Último",
                "next":       "Siguiente",
                "previous":   "Anterior"
            },
            "aria": {
                "sortAscending":  ": activar para ordenar la columna ascendentemente",
                "sortDescending": ": activar para ordenar la columna descendentemente"
            }
        }
    });

    //Save configuration
    if( $('#facturacom_settings').length ){

        $('#send_settings').click(function(event){
            event.preventDefault();

            $('#setting_loading').fadeIn('fast');
            var form_valid = validateFormSettings($(this), 1);

            if( form_valid == 1 ) {
                $('#setting_loading').fadeOut('fast');
                $('#submit_message').addClass('input_error')
                        .text('Algunos datos están incompletos. Por favor revise la configuración e intente de nuevo.')
                        .fadeIn('fast');
                return false;
            }

            form_data = $('#facturacom_settings').serializeArray();

            data = {
              action      : 'save_config',
              apikey      : form_data[0].value,
              apisecret   : form_data[1].value,
              serie       : form_data[2].value,
              dayoff      : form_data[3].value,
              title       : form_data[4].value,
              description : form_data[5].value,
              colorheader : form_data[6].value,
              colorfont   : form_data[7].value,
            }

            $.post(myAjax.ajaxurl, data, function(response){
                $('#setting_loading').fadeOut('fast');
                $('#submit_message').removeClass('input_error')
                        .text('La configuración se ha guardado correctamente.')
                        .fadeIn('fast');
            });


            return false;
        });

    }

    function validateFormSettings(form, option){

        switch (option) {
            case 1:
                var response = 0;
                var apikey = $('#facturacom_settings').find('#apikey');
                if(apikey.val().length == 0){
                  $("label[for='"+apikey.attr('id')+"']").addClass("input_error");
                  response = 1;
                }else{
                  $("label[for='"+apikey.attr('id')+"']").removeClass("input_error");
                  response = 0;
                }

                var apisecret = $('#facturacom_settings').find('#apisecret');
                if(apisecret.val().length == 0){
                  $("label[for='"+apisecret.attr('id')+"']").addClass("input_error");
                  response = 1;
                }else{
                  $("label[for='"+apisecret.attr('id')+"']").removeClass("input_error");
                  response = 0;
                }

                var serie = $('#facturacom_settings').find('#serie');
                if(serie.val().length == 0){
                  $("label[for='"+serie.attr('id')+"']").addClass("input_error");
                  response = 1;
                }else{
                  $("label[for='"+serie.attr('id')+"']").removeClass("input_error");
                  response = 0;
                }

                var dayoff = $('#facturacom_settings').find('#dayoff');
                if(dayoff.val().length == 0){
                  $("label[for='"+dayoff.attr('id')+"']").addClass("input_error");
                  response = 1;
                }else{
                  $("label[for='"+dayoff.attr('id')+"']").removeClass("input_error");
                  response = 0;
                }

                return response;
                break;
            default:
                break;

            //end validation
        }
    }

    $('.send_invoice').unbind().on('click', function(e){
        e.preventDefault();
        $(this).html('Enviando factura');
        $('.send_invoice').attr("disabled", true);

        var invoiceId = jQuery(this).attr('data-uid');
        var data = {
                action : 'send_invoice',
                uid    : invoiceId
        };

        $.post(myAjax.ajaxurl, data, function(response){
            $('.send_invoice').attr("disabled", false);
            alert(response.message);
        }, "json");

    });

    $('.cancel_invoice').unbind().on('click', function(e){
        e.preventDefault();

        $(this).html('Cancelando');
        $('.cancel_invoice').attr("disabled", true);
        var invoiceId = $(this).attr('data-uid');

        bootbox.confirm({
            message: "¿Estás seguro de cancelar esta factura?",
            buttons: {
                cancel: {
                    label: 'No cancelar'
                },
                confirm: {
                    label: 'Cancelar'
                }
            },
            callback: function(result){
                if(result){
                    var data = {
                            action : 'cancel_invoice',
                            uid    : invoiceId
                    };

                    $.post(myAjax.ajaxurl, data, function(response){
                        $('.cancel_invoice').attr("disabled", false);
                        $('.cancel_invoice').html('Cancelar');
                        bootbox.alert(response.message);
                    }, "json");
                }else{
                    $('.cancel_invoice').attr("disabled", false);
                    $('.cancel_invoice').html('Cancelar');
                }


            }
        });


    });

    //Front client area functions
    //vars
    var order_data, customer_data, invoice_data;

    String.prototype.capitalize = function() {
        return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    };

    Number.prototype.formatMoney = function(c, d, t){
        var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

    $(".input-cap").on('input', function(evt) {
        var input = $(this);
      	var start = input[0].selectionStart;

      	$(this).val(function (_, val) {
      	     return val.capitalize();
      	});
        input[0].selectionStart = input[0].selectionEnd = start;
    });

    $(".input-upper").on('input', function(evt) {
        var input = $(this);
        var start = input[0].selectionStart;
        $(this).val(function(_, val){
            return val.toUpperCase();
        });
        input[0].selectionStart = input[0].selectionEnd = start;
    });

    $('#f-rfc').bind('keypress', function (event) {
        var keyCode = event.keyCode || event.which
        if (keyCode == 8 || (keyCode >= 35 && keyCode <= 40)) {
            return;
        }

        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });

    $('#step-two-button-edit').click(function(e){
      e.preventDefault();
      var b = $(this).attr('data-b');

      if(b == 1){
        enableFormTwo(true);
        $(this).attr('data-b', 0);
        $("#f-step-two-form #apimethod").val("update");
        $("#step-two-button-next").val("Actualizar");
      }else{
        fillFormTwo(customer_data);
        enableFormTwo(false);
        $(this).attr('data-b', 1);
        $("#f-step-two-form #apimethod").val("create");
        $("#step-two-button-next").val("Siguiente");
      }

    });

    $('.f-back').click(function(e){
      e.preventDefault();
      var form = $(this).attr("data-f");
      clearData(form);
    });

    function clearData(step){
      if(step == 2){
        $("#f-step-two-form").trigger("reset");
        $("#step-two").stop().hide();
        $(".customer-data").css({"background-color":"#9B9B9B"});
        $(".search-order").css({"background-color":"#942318"});

        $("#step-one").stop().fadeIn('slow');
      }else if(step == 3){
        $("#step-three").stop().hide();
        $(".verify-order").css({"background-color":"#9B9B9B"});
        $(".customer-data").css({"background-color":"#9B9B9B"});
        $('.search-order').css({ "background-color" : '#942318' });
        $("#step-two").stop().fadeIn('slow');
      }
    }

    function fillInvoiceContainer(order_data, customer_data){

        $('#invoice-id').hide();
        $('#invoice-date').hide();
        //receptor
        $('#receptor-nombre').text(customer_data.RazonSocial);
        $('#receptor-rfc').text(customer_data.RFC);
        $('#receptor-direccion').text(customer_data.Calle + ' ' + customer_data.Numero + ' ' + customer_data.Interior);
        $('#receptor-direccion-zone').text(customer_data.Colonia + '. CP: ' + customer_data.CodigoPostal);
        $('#receptor-direccion-zone-city').text(customer_data.Ciudad + ', ' + customer_data.Estado
                + ', México.');
        //$('#receptor-email').text(invoice_data.Data.Contacto.Email);

        //emisor
        $('#emisor-nombre').text("UNMANNED SYSTEMS S A P I DE CV");
        $('#emisor-rfc').text("USY141002JX2");
        $('#emisor-direccion').text("López Mateos 400 Int: Piso 8");
        $('#emisor-direccion-zone').text("Ladrón de Guevara. CP: 44650");
        $('#emisor-direccion-zone-city').text("Guadalajara, Jalisco, México.");

        //products
        var subtotal = 0;
        var taxes    = 0;
        var products = order_data.line_items;
        var discount = Number(order_data.total_discount);

        var r = new Array(), j = -1;
        for (var key=0, size=products.length; key<size; key++){

            if(products[key]['product_id'] == 'free_shipping' || products[key]['product_id'] == 'local_delivery'){
              continue;
            }

            if(discount <= 0){
              unit_price = Number(products[key]['price'] / 1.16);
            }else{
              unit_price = Number(products[key]['subtotal']/products[key]['quantity']);
            }

            unit_subtotal = products[key]['quantity'] * unit_price;

            r[++j] ='<tr><td>';
            r[++j] = products[key]['name'];
            r[++j] = '</td><td>';
            r[++j] = products[key]['quantity'];
            r[++j] = '</td><td>$';
            r[++j] = (unit_price).formatMoney(2, '.', ',');
            r[++j] = '</td><td>$';
            r[++j] = (unit_subtotal).formatMoney(2, '.', ',');
            r[++j] = '</td></tr>';

            subtotal = Number(subtotal) + Number(unit_subtotal);
            taxes    = Number(taxes) + Number(products[key]['total_tax']);

            unit_price = 0;
        }
        $('#datails-body').html(r.join(''));

        var grand_total = Number(order_data.total);
        var total_iva = grand_total * 0.16;
        var payment_method;

        if(order_data.payment_details.method_id == "paypal"){
            payment_method = "Pago con Tarjeta";
        }else{
            payment_method = "Depósito en Cuenta";
        }

      if(discount > 0){
          pre_total = Number((subtotal-discount)/1.16);
          total_iva = Number((subtotal-discount) - pre_total);
          total = Math.round(pre_total + total_iva);

          console.log("pre_total: " + pre_total);

          $('#td-discount #invoice-discount').text('$'+discount.formatMoney(2, '.', ','));
          $('#td-discount').css({'display':'table-row'});


      }else{
          total_iva = subtotal*0.16;
          total = Math.round(subtotal+total_iva);
      }


      $('#invoice-pmethod').text(payment_method); //order_data.payment_details.paid (para saber si está pagado)
      $('#invoice-subtotal').text('$'+subtotal.formatMoney(2, '.', ','));
      $('#invoice-iva').text('$'+(total_iva).formatMoney(2, '.', ','));
      $('#invoice-total').text('$'+(total).formatMoney(2, '.', ','));

    }

    function fillFormTwo(data){
      //contacto
      $('#uid').val(data.UID);
      $('#general-nombre').val(data.Contacto.Nombre);
      $('#general-apellidos').val(data.Contacto.Apellidos);
      $('#general-email').val(data.Contacto.Email);

      $('#fiscal-rfc').val(data.RFC);
      $('#fiscal-nombre').val(data.RazonSocial);
      $('#fiscal-calle').val(data.Calle);
      $('#fiscal-exterior').val(data.Numero);
      $('#fiscal-interior').val(data.Interior);
      $('#fiscal-colonia').val(data.Colonia);
      $('#fiscal-delegacion').val(data.Delegacion);
      $('#fiscal-municipio').val(data.Ciudad);
      $('#fiscal-estado').val(data.Estado);
      $('#fiscal-pais').val("México");
      $('#fiscal-cp').val(data.CodigoPostal);
      $('#fiscal-telefono').val(data.Contacto.Telefono);

      $('#step-two [type=input]').removeAttr('readonly');
    }

    function enableFormTwo(b){
      if(b == true){
        $('#general-nombre').removeAttr('readonly');
        $('#general-apellidos').removeAttr('readonly');
        $('#general-email').removeAttr('readonly');

        $('#fiscal-rfc').removeAttr('readonly');
        $('#fiscal-nombre').removeAttr('readonly');
        $('#fiscal-calle').removeAttr('readonly');
        $('#fiscal-exterior').removeAttr('readonly');
        $('#fiscal-interior').removeAttr('readonly');
        $('#fiscal-colonia').removeAttr('readonly');
        $('#fiscal-ciudad').removeAttr('readonly');
        $('#fiscal-delegacion').removeAttr('readonly');
        $('#fiscal-municipio').removeAttr('readonly');
        $('#fiscal-estado').removeAttr('readonly');
        $('#fiscal-pais').removeAttr('readonly');
        $('#fiscal-cp').removeAttr('readonly');
        $('#fiscal-telefono').removeAttr('readonly');
        $('#step-two-button-edit').val('Cancelar');
        var $labels = $("#f-step-two-form label[for]");
        $labels.css({'border-color':'#67BA2F'});

      }else{
        $('#general-nombre').attr('readonly','readonly');
        $('#general-apellidos').attr('readonly','readonly');
        $('#general-email').attr('readonly','readonly');

        $('#fiscal-rfc').attr('readonly','readonly');
        $('#fiscal-nombre').attr('readonly','readonly');
        $('#fiscal-calle').attr('readonly','readonly');
        $('#fiscal-exterior').attr('readonly','readonly');
        $('#fiscal-interior').attr('readonly','readonly');
        $('#fiscal-colonia').attr('readonly','readonly');
        $('#fiscal-ciudad').attr('readonly','readonly');
        $('#fiscal-delegacion').attr('readonly','readonly');
        $('#fiscal-municipio').attr('readonly','readonly');
        $('#fiscal-estado').attr('readonly','readonly');
        $('#fiscal-pais').attr('readonly','readonly');
        $('#fiscal-cp').attr('readonly','readonly');
        $('#fiscal-telefono').attr('readonly','readonly');
        $('#step-two-button-edit').val('Editar');
        var $labels = $("#f-step-two-form label[for]");
        $labels.css({'border-color':'#c2c2c2'});
      }
    }

    function validateForm(form, step){
      if(step == 1){

        var rfc_item   = $("#f-rfc");
        var order_item = $("#f-num-order");
        var email_item = $("#f-email");

        if(rfc_item.val().length == 0){
          $("label[for='"+rfc_item.attr('id')+"']").addClass("input_error");
          rfc_item.addClass("input_error");
        }else{
          $("label[for='"+rfc_item.attr('id')+"']").removeClass("input_error");
          rfc_item.removeClass("input_error");
        }

        if(order_item.val().length == 0){
          $("label[for='"+order_item.attr('id')+"']").addClass("input_error");
          order_item.addClass("input_error");
        }else{
          $("label[for='"+order_item.attr('id')+"']").removeClass("input_error");
          order_item.removeClass("input_error");
        }

        if(email_item.val().length == 0){
          $("label[for='"+email_item.attr('id')+"']").addClass("input_error");
          email_item.addClass("input_error");
        }else{
          $("label[for='"+email_item.attr('id')+"']").removeClass("input_error");
          email_item.removeClass("input_error");
        }

        if(rfc_item.val().length > 13 || rfc_item.val().length < 12){
          $("label[for='"+rfc_item.attr('id')+"']").addClass("input_error");
          rfc_item.addClass("input_error");
          return false;
        }

        /*
        console.log(rfc_item.val().length > 0);
        console.log(order_item.val().length > 0);
        console.log(email_item.val().length > 0);
        */

        if( rfc_item.val().length > 0 && order_item.val().length > 0 && email_item.val().length > 0 ){
          rfc_item.removeClass("input_error");
          order_item.removeClass("input_error");
          email_item.removeClass("input_error");
          $("label[for='"+rfc_item.attr('id')+"']").removeClass("input_error");
          $("label[for='"+order_item.attr('id')+"']").removeClass("input_error");
          $("label[for='"+email_item.attr('id')+"']").removeClass("input_error");

          jQuery('#f-step-one-form .error_msj').text('').hide();
          return true;
        }else{
          jQuery('#f-step-one-form .error_msj').text('Por favor completa y/o corrige los datos.').show();
        }


      }else if(step == 2){

        var isValid = [];
        var chkForInvalidAmount = [];

        $('#f-step-two-form .f-input').each(function () {

          var item = $(this);

          if(item.attr('id') == "fiscal-delegacion" || item.attr('id') == "fiscal-interior" ){
            return;
          }

          if(item.val().length == 0){
            $("label[for='"+item.attr('id')+"']").addClass("input_error");
            item.addClass("input_error");
            isValid.push("false");
          }else{
            $("label[for='"+item.attr('id')+"']").removeClass("input_error");
            item.removeClass("input_error");
            isValid.push("true");
          }

        });

        var valid = $.inArray( "false", isValid );

        if(valid == -1){
          $('#f-step-two-form .error_msj').text('').hide();
          return true;
        }else{
          $('#f-step-two-form .error_msj').text('Por favor completa y/o corrige los datos.').show();
        }

      }else{

      }


      return false;
    }

    function getCookie(cname) {
        return $.cookie(cname);
    }

    //STEP ONE
    $('#f-step-one-form').submit(function(e){
          e.preventDefault();

          if( !validateForm($(this), 1) ) {
            return false;
          }

          $('.f-welcome-container').fadeOut('fast');
          $("#step-one .loader_content").show();

          form_data = $(this).serializeArray();

          data = {
            action : 'step_one',
            csrf   : form_data[0].value,
            rfc    : form_data[1].value,
            order  : form_data[2].value,
            email  : form_data[3].value,
          }

          $.post(myAjax.ajaxurl, data, function(response) {
            $("#step-one .loader_content").hide();

            /*
            var customerData = getCookie('customer');
            var orderData    = getCookie('order');
            */

            console.log(response.metadata);

            if(response.metadata != null && response.metadata.code == 101){
                $('#result-msg-title').text(response.message);
                // $('#btn-success-email').stop().show().attr('data-invoice', response.metadata.uid);
                $('#btn-success-pdf').stop().show().attr('href','https://factura.com/api/publica/invoice/'+response.metadata.uid+'/pdf');
                $('#btn-success-xml').stop().show().attr('href','https://factura.com/api/publica/invoice/'+response.metadata.uid+'/xml');
                $('#step-one').stop().hide();
                $('#step-four').stop().fadeIn('slow');
                return false;
            }

            if(!response.success){
                var inst = $('[data-remodal-id=respuesta-paso-uno]').remodal();
                $('#message-response-one').text(response.message);
                inst.open();
                return false;
            }

            // continue processing
            // order_data = response.order;
            customer_data = response.customer;
            if(customer_data.status != "error"){
                $('#f-step-two-form').children('#fiscal-rfc').val(customer_data.rfc);
            }
            // $('#step-two .step-instruction').addClass(response.invoice.class).text(response.invoice.message);

            if(customer_data.status != "error"){
                fillFormTwo(customer_data);
            }else{
                $('#step-two-button-edit').hide();
                enableFormTwo(true);
            }

            $('#step-one').stop().hide();
            $('#step-two').stop().fadeIn('slow');


        }, 'json');

        return false;
    });

    //STEP TWO
    $('#f-step-two-form').submit(function(e){
      e.preventDefault();

      $("#step-two .loader_content").show();

      if( !validateForm($(this), 2) ) {
        $("#step-two .loader_content").hide();
        return false;
      }

      form_data = $(this).serializeArray();

      data = {
        action        : 'create_client',
        csrf          : form_data[0].value,
        api_method    : form_data[1].value,
        uid           : form_data[2].value,
        g_nombre      : form_data[3].value,
        g_apellidos   : form_data[4].value,
        g_email       : form_data[5].value,
        f_telefono    : form_data[6].value,
        f_nombre      : form_data[7].value,
        f_rfc         : form_data[8].value,
        f_calle       : form_data[9].value,
        f_exterior    : form_data[10].value,
        f_interior    : form_data[11].value,
        f_colonia     : form_data[12].value,
        f_municipio   : form_data[13].value,
        f_estado      : form_data[14].value,
        f_pais        : form_data[15].value,
        f_cp          : form_data[16].value,
      }

      $.post(myAjax.ajaxurl, data, function(response) {
        $("#step-two .loader_content").hide();
        var customer_data = response.customer;
        var order_data    = response.order;

        if(!response.success){
            var inst = $('[data-remodal-id=respuesta-paso-dos]').remodal();
            $('#message-response-dos').text(response.message);
            inst.open();
        }else{
          fillInvoiceContainer(order_data, customer_data);
          $('#step-two').stop().hide();
          $('#step-three').stop().fadeIn('slow');
        }
      }, 'json');
    });

    //STEP THREE
    $('#step-three-button-next').click(function(e){
      e.preventDefault();
      $("#step-three .loader_content").show();

      var selected_method = $( "#select-payment option:selected" ).val();
      var selected_method_text = $( "#select-payment option:selected" ).text();

      if(selected_method == 0){
        $("#step-three .loader_content").hide();
        var inst = $('[data-remodal-id=respuesta-paso-dos]').remodal();
        $('#message-response-dos').text('Por favor selecciona un método de pago.');
        inst.open();
        return false;
      }

      var num_cta_method  = $( "#f-num-cta" ).val();

      if(selected_method == 4 || selected_method == 5){
        if(num_cta_method == ""){
          $("#step-three .loader_content").hide();
          var inst = $('[data-remodal-id=respuesta-paso-dos]').remodal();
          $('#message-response-dos').text('Por favor ingresa los últimos 4 dí­gitos de tu cuenta o tarjeta.');
          inst.open();
          return false;
        }
      }

      data = {
        action        : 'generate_invoice',
        payment_m     : selected_method,
        payment_t     : selected_method_text,
        num_cta_m     : num_cta_method
      }

      $.post(myAjax.ajaxurl, data, function(response){
        $("#step-three").stop().hide();
        $("#step-three .loader_content").hide();
        console.log(response);

        if(response.invoice.status == 'success'){
        //   $('#btn-success-email').stop().show().attr('data-invoice', response.invoice.invoice_uid);
          $('#btn-success-pdf').stop().show().attr('href','https://factura.com/api/publica/invoice/'+response.invoice.invoice_uid+'/pdf');
          $('#btn-success-xml').stop().show().attr('href','https://factura.com/api/publica/invoice/'+response.invoice.invoice_uid+'/xml');
        }else{
          $("#result-msg-title").text(response.invoice.message);

        //   $('#btn-success-email').stop().hide();
          $('#btn-success-pdf').stop().hide();
          $('#btn-success-xml').stop().hide();
        }

        $("#step-four").stop().fadeIn("slow");
      }, 'json');

    });

    $("#select-payment").change(function(){
         var selected_method = $( "#select-payment option:selected" ).val();

         if(selected_method == 4 || selected_method == 5){
           $("#num-cta-box").fadeIn('fast');
         }else{
           $("#num-cta-box").fadeOut('fast');
         }
     });

});
