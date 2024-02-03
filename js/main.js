$(document).ready(function(){
    jQuery('[data-vbg]').youtube_background();

    const videoBackgrounds = VIDEO_BACKGROUNDS;

    $('#main_search').on('focus', function(){
        $('.main_search_input').addClass('focus');
    });
    $('#main_search').on('blur', function(){
        $('.main_search_input').removeClass('focus');
    });

    $('.main_search_input').on('mouseenter', function(){
        $(this).addClass('hover');
    });

    $('.main_search_input').on('mouseleave', function(){
        $(this).removeClass('hover');
    });

    $('.task_list_btn').on('click', function(){
        if($(window).innerWidth() >= 768) {
            $(this).parent('li').addClass('active').siblings().removeClass('active');
        }
    });

    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#header').addClass('scroll_active');
        }
        else{
            $('#header').removeClass('scroll_active');
        }
    });

    $('.mobile_menu_btn').on('click', function(){
        $('#nav').toggleClass('active');
        $('#header').toggleClass('mobile_menu_open');
    });



    $(window).on('resize', function(){
        if($(window).outerWidth() <= 768){
            $('.our_tasks ul > li').removeClass('active');
            $('#nav').removeClass('active');
            $('.mobile_menu_btn').removeClass('active');
            $('#header').removeClass('mobile_menu_open');
        }
        else{
            $('.our_tasks ul > li').eq(0).addClass('active');
        }
    });



    $('.bookmark').on('click', function(){
        $(this).toggleClass('add_mark');
        var bookmark_num = $('.add_mark').length;
        // console.log(bookmark_num);

        $('.bookmark_length').text(bookmark_num);

        if(bookmark_num > 0){
            $('.hr_bookmark').addClass('length_active');
        }
        else{
            $('.hr_bookmark').removeClass('length_active');
        }
    });


    // $('.dsc_left').on('click', function(){
    //     $('.domain_scroll_box').scrollLeft(0);
    // });

    // var dsb_width = $('.domain_scroll_box').innerWidth() / 2;
    
    // $('.dsc_right').on('click', function(){
    //     $('.domain_scroll_box').scrollLeft(dsb_width);
    // });

    $(document).ready(function() {
        var scrollDiv = $('.domain_scroll_box'); 
    
        $('.dsc_left').click(function() {
            scrollDiv.scrollLeft(scrollDiv.scrollLeft() - $(window).width() * 0.5);
        });
    
        $('.dsc_right').click(function() {
            scrollDiv.scrollLeft(scrollDiv.scrollLeft() + $(window).width() * 0.5);
        });
    });
    


    var section_idx = 0;
    var section_list = ['#main', '#our_tasks', '#hot_positions', '#your_domain', '#footer'];

    $('.main_section_move').on('click', function(){
        section_idx ++;
        // console.log(section_idx);

        var section_idx_change = section_list[section_idx];
        // console.log(section_idx_change);

        
        $('.main_section_move a').prop('href', section_idx_change);

        if(section_idx == section_list.length - 1){
            section_idx = -1; 
            $('.main_section_move').addClass('go_up');
        }
        else{
            $('.main_section_move').removeClass('go_up');
        }
    });


    

    
    
    
    

});